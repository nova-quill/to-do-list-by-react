import React, { useCallback, useContext, useEffect, useRef } from "react";
import { tasksListContext } from "../../context/TasksProvider";
import { AddCategoryContext } from "../../context/AddCategoryProvider";
import { CurrentCategoryContext } from "./../../context/TypeCategoryProvider";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { getFromLocal, saveToLocal } from "./../../utils/storage";
import { TASKS_LIST_KEY, CURRENT_CATEGORY_KEY } from "./../../utils/constants";
import TaskFormAdd from "./TaskFormAdd";
import TaskEditeForm from "./TaskEditeForm";
import { useNavRef } from "../../context/NavRefProvider";

export default function FormAddOrEditeTask({
  isEditing,
  setIsEditing,
  editingTaskId,
  setEditingTaskId,
}) {
  const { tasksList, setTasksList } = useContext(tasksListContext);
  const { categories } = useContext(AddCategoryContext);
  const { currentCategory, setCurrentCategory } = useContext(
    CurrentCategoryContext
  );
  const inputCategory = useRef();
  const taskTitleRef = useRef();
  const { scrollToEnd } = useNavRef();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    taskTitle: Yup.string().required("task title is required"),
  });

  const initialValues = {
    taskTitle: "",
    taskDescription: "",
    dueDate: "",
    priority: "",
    choose_Category: getFromLocal(CURRENT_CATEGORY_KEY) || "all",
    isCompleted: false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: function (values) {
      if (editingTaskId) {
        const updateTask = tasksList.map((task) =>
          task.id === editingTaskId ? { ...values, editingTaskId } : task
        );
        setTasksList(updateTask);
        saveToLocal(TASKS_LIST_KEY, updateTask);
        setEditingTaskId(null);
        setIsEditing(false);
      } else {
        const newTask = {
          ...values,
          id: uuidv4(),
        };
        const newTasksList = [...tasksList, newTask];
        setTasksList(newTasksList);
        saveToLocal(TASKS_LIST_KEY, newTasksList);

        navigate(`/${currentCategory || "all"}`);
      }
      scrollToEnd();
    },
  });

  const cancelEditeForm = useCallback(() => {
    setEditingTaskId(null);
  }, [setEditingTaskId]);

  const handleCategoryValue = () => {
    const storedCategory = getFromLocal(CURRENT_CATEGORY_KEY);
    inputCategory.current.value = storedCategory || "all";
    taskTitleRef.current.focus();
  };

  const onChangeCategoryValue = (e) => {
    formik.handleChange(e);
    setCurrentCategory(e.target.value);
  };

  useEffect(() => {
    handleCategoryValue();
  }, []);

  useEffect(() => {
    if (editingTaskId) {
      const isExistTask = tasksList.find((task) => task.id === editingTaskId);
      if (isExistTask) {
        formik.setValues(isExistTask);
      }
    }
  }, []);

  return (
    <>
      {isEditing ? (
        <>
          <TaskEditeForm
            formik={formik}
            taskTitleRef={taskTitleRef}
            inputCategory={inputCategory}
            categories={categories}
            onChangeCategoryValue={onChangeCategoryValue}
            cancelEditeForm={cancelEditeForm}
          />
        </>
      ) : (
        <>
          <TaskFormAdd
            formik={formik}
            taskTitleRef={taskTitleRef}
            inputCategory={inputCategory}
            categories={categories}
            onChangeCategoryValue={onChangeCategoryValue}
          />
        </>
      )}
    </>
  );
}

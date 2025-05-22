import React, {
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect,
} from "react";
import { tasksListContext } from "../../context/TasksProvider";
import { CurrentCategoryContext } from "../../context/TypeCategoryProvider";
import { getSessionBool, saveToLocal } from "./../../utils/storage";
import { TASKS_LIST_KEY } from "./../../utils/constants";
import NoTasksPlaceholder from "../noTasksPlaceholder/NoTasksPlaceholder";
import { TaskFilterContext } from "../../context/TaskFilterProvider";
import { FilterPriorityContext } from "../../context/ShowPriorityProvider";
import { FilterDueDateContext } from "../../context/ShowDueDateProvider";
import { useSearchRef } from "../../context/SearchRefProvider";
import notFoundImage from "../../assets/not found.png";
import TaskSection from "../TaskSection/TaskSection";
import useFilteredTasks from "../../hooks/UseFilteredTasks";

export default function FilterTasks() {
  const { tasksList, setTasksList } = useContext(tasksListContext);
  const { currentCategory } = useContext(CurrentCategoryContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const { showCompleted, setShowCompleted } = useContext(TaskFilterContext);
  const { showPriority, setShowPriority } = useContext(FilterPriorityContext);
  const { showDueDate, setShowDueDate } = useContext(FilterDueDateContext);
  const { searchResults, SearchBox } = useSearchRef();
  // localStorage.clear();
  // sessionStorage.clear();
  const checkInputRefs = useRef({});

  const filteredTasks = useFilteredTasks(tasksList, {
    currentCategory,
    showCompleted,
    showPriority,
    showDueDate,
    searchResults,
  });

  const editTask = useCallback(
    (id) => {
      setEditingTaskId(id);
      setIsEditing(true);
      console.log('mklk')
    },
    [setEditingTaskId, setIsEditing]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasksList((prev) => {
        const newTasksList = prev.filter((task) => task.id !== id);
        saveToLocal(TASKS_LIST_KEY, newTasksList);
        return newTasksList;
      });
    },
    [setTasksList]
  );

  const handleCheck = useCallback(
    (id) => {
      setTasksList((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        );
        saveToLocal(TASKS_LIST_KEY, updatedTasks);
        return updatedTasks;
      });
    },
    [setTasksList]
  );

  const sharedProps = {
    isEditing,
    setIsEditing,
    editingTaskId,
    setEditingTaskId,
    editTask,
    deleteTask,
    checkInputRefs,
    handleCheck,
  };

  useEffect(() => {
    setShowCompleted(getSessionBool("showCompleted"));
    setShowPriority(getSessionBool("showPriority"));
    setShowDueDate(getSessionBool("showDueDate"));
  }, []);
  return (
    <>
      {tasksList.length === 0 || filteredTasks.namePage.length === 0 ? (
        <NoTasksPlaceholder currentCategory={currentCategory} />
      ) : filteredTasks.todayCompleted.length > 0 ||
        filteredTasks.todayIncomplete.length > 0 ||
        filteredTasks.otherCompleted.length > 0 ||
        filteredTasks.otherInComplete.length > 0 ? (
        <>
          <div className="container">
            <div className="mb-5">
              <h4 className="text-text-capitalize"> Today's Tasks</h4>

              {filteredTasks.todayCompleted.length > 0 ||
              filteredTasks.todayIncomplete.length > 0 ? (
                <>
                  {filteredTasks.todayCompleted &&
                    filteredTasks.todayCompleted.length > 0 && (
                      <TaskSection
                        tasks={filteredTasks.todayCompleted}
                        title={`completed tasks`}
                        {...sharedProps}
                      />
                    )}

                  {filteredTasks.todayIncomplete &&
                    filteredTasks.todayIncomplete.length > 0 && (
                      <TaskSection
                        tasks={filteredTasks.todayIncomplete}
                        title={`incompleted tasks`}
                        {...sharedProps}
                      />
                    )}
                </>
              ) : (
                <h6 className="text-muted text-capitalize">
                  no Tasks in today
                </h6>
              )}
            </div>

            <div className="mb-5">
              <h4 className="text-text-capitalize"> other Tasks</h4>

              {filteredTasks.otherCompleted.length > 0 ||
              filteredTasks.otherInComplete.length > 0 ? (
                <>
                  {filteredTasks.otherCompleted &&
                    filteredTasks.otherCompleted.length > 0 && (
                      <TaskSection
                        tasks={filteredTasks.otherCompleted}
                        title={`completed tasks`}
                        {...sharedProps}
                      />
                    )}
                  {filteredTasks.otherInComplete &&
                    filteredTasks.otherInComplete.length > 0 && (
                      <TaskSection
                        tasks={filteredTasks.otherInComplete}
                        title={`incompleted tasks`}
                        {...sharedProps}
                      />
                    )}
                </>
              ) : (
                <h6 className="text-muted text-capitalize">
                  no Tasks in other
                </h6>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="mh-100 px-2 d-flex justify-content-center align-align-items-center">
          <div className="text-center my-5 text-muted">
            <img
              src={notFoundImage}
              alt="No matching tasks found"
              className="mb-4 mw-100 w-75"
            />
            <p className="text-secondary">No matching tasks found.</p>
          </div>
        </div>
      )}
    </>
  );
}


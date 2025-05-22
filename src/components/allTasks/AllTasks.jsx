import React, { useContext } from "react";
import { CardTask } from "../cardTask/CardTask";
import FormAddOrEditeTask from "../../features/taskForm/FormAddOrEditeTask";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { tasksListContext } from "../../context/TasksProvider";
import { saveToLocal } from "../../utils/storage";
import { TASKS_LIST_KEY } from "../../utils/constants";

export default function AllTasks({
  isEditing,
  setIsEditing,
  editingTaskId,
  setEditingTaskId,
  editTask,
  deleteTask,
  checkInputRefs,
  handleCheck,
  tasks,
  title,
}) {
  const { setTasksList } = useContext(tasksListContext);

  const handleDragEnd = (result) => {

    if (!result.destination) return;
    const items = [...tasks];

    const [moveItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moveItem);

    setTasksList((prev) => {
      const otherTasks = prev.filter(
        (task) => !tasks.some((t) => t.id === task.id)
      );
      const newList = [...otherTasks, ...items];
      saveToLocal(TASKS_LIST_KEY, newList);

      return newList;
    });
  };

  if (!tasks || tasks.length === 0) return null;

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>

        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="mb-5 mt-4 z-1"
            >
              <h6 className="text-secondary mb-4 text-capitalize">{title}</h6>
              {tasks.map((task, index) => (
                <React.Fragment key={task.id}>
                  {editingTaskId === task.id ? (
                    <FormAddOrEditeTask
                      isEditing={isEditing}
                      setIsEditing={setIsEditing}
                      editingTaskId={editingTaskId}
                      setEditingTaskId={setEditingTaskId}
                    />
                  ) : (
                    <Draggable draggableId={task.id} index={index}>
                      {(provided) => (
                        <CardTask
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          task={task}
                          editTask={editTask}
                          deleteTask={deleteTask}
                          checkInputRefs={(el) =>
                            (checkInputRefs.current[task.id] = el)
                          }
                          handleCheck={handleCheck}
                        />
                      )}
                    </Draggable>
                  )}
                </React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

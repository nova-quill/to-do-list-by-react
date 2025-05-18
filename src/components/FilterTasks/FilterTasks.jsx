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
import { arrayMove } from "@dnd-kit/sortable";

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

















// داخل FilterTasks component
// const handleDragEnd = (event, sectionTasks, sectionTitle) => {
//   const { active, over } = event;
//   if (!over || active.id === over.id) return;

//   const activeIndex = sectionTasks.findIndex((task) => task.id === active.id);
//   const overIndex = sectionTasks.findIndex((task) => task.id === over.id);

//   const updatedSectionTasks = arrayMove(sectionTasks, activeIndex, overIndex);

//   setTasksList((prev) => {
//     // تحديث قائمة المهام داخل الـ tasksList الكاملة
//     const updated = [...prev];
//     const sectionTaskIds = sectionTasks.map((t) => t.id);
//     const remainingTasks = updated.filter((task) => !sectionTaskIds.includes(task.id));
//     const newList = [...remainingTasks, ...updatedSectionTasks];
//     saveToLocal(TASKS_LIST_KEY, newList);
//     return newList;
//   });
// };

















  useEffect(() => {

setShowCompleted(getSessionBool('showCompleted'))
 setShowPriority(getSessionBool('showPriority'));
setShowDueDate(getSessionBool('showDueDate'));

    // const showCompletedLocal = JSON.parse(
    //   sessionStorage.getItem("showCompleted")??false
    // );
    // setShowCompleted(showCompletedLocal);
    // const showPriorityLocal = JSON.parse(
    //   sessionStorage.getItem("showPriority")??false
    // );
    // setShowPriority(showPriorityLocal);
    // const showDueDateLocal = JSON.parse(sessionStorage.getItem("showDueDate"))??false;
    // setShowDueDate(showDueDateLocal);





// const showCompletedLocal = JSON.parse(
//       sessionStorage.getItem("showCompleted"))??null
//     ;
//     setShowCompleted(showCompletedLocal);
//     const showPriorityLocal = JSON.parse(
//       sessionStorage.getItem("showPriority"))??null
//     ;
//     setShowPriority(showPriorityLocal);
//     const showDueDateLocal = JSON.parse(sessionStorage.getItem("showDueDate"))??null;
//     setShowDueDate(showDueDateLocal);





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
        <div className="text-center my-5 text-muted">
          <img src={notFoundImage} alt="No matching tasks found" className="mb-4 mw-100" />
          <p className="text-secondary">No matching tasks found.</p>
        </div>
      )}
    </>
  );
}



































// import React, {
//   useContext,
//   useCallback,
//   useState,
//   useRef,
//   useEffect,
// } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { tasksListContext } from "../../context/TasksProvider";
// import { CurrentCategoryContext } from "../../context/TypeCategoryProvider";
// import { getSessionBool, saveToLocal } from "./../../utils/storage";
// import { TASKS_LIST_KEY } from "./../../utils/constants";
// import NoTasksPlaceholder from "../noTasksPlaceholder/NoTasksPlaceholder";
// import { TaskFilterContext } from "../../context/TaskFilterProvider";
// import { FilterPriorityContext } from "../../context/ShowPriorityProvider";
// import { FilterDueDateContext } from "../../context/ShowDueDateProvider";
// import { useSearchRef } from "../../context/SearchRefProvider";
// import notFoundImage from "../../assets/not found.png";
// import CardTask from "../CardTask/CardTask";
// import useFilteredTasks from "../../hooks/UseFilteredTasks";

// export default function FilterTasks() {
//   const { tasksList, setTasksList } = useContext(tasksListContext);
//   const { currentCategory } = useContext(CurrentCategoryContext);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const { showCompleted, setShowCompleted } = useContext(TaskFilterContext);
//   const { showPriority, setShowPriority } = useContext(FilterPriorityContext);
//   const { showDueDate, setShowDueDate } = useContext(FilterDueDateContext);
//   const { searchResults } = useSearchRef();
//   const checkInputRefs = useRef({});

//   const filteredTasks = useFilteredTasks(tasksList, {
//     currentCategory,
//     showCompleted,
//     showPriority,
//     showDueDate,
//     searchResults,
//   });

//   const editTask = useCallback((id) => {
//     setEditingTaskId(id);
//     setIsEditing(true);
//   }, []);

//   const deleteTask = useCallback((id) => {
//     setTasksList((prev) => {
//       const newTasksList = prev.filter((task) => task.id !== id);
//       saveToLocal(TASKS_LIST_KEY, newTasksList);
//       return newTasksList;
//     });
//   }, []);

//   const handleCheck = useCallback((id) => {
//     setTasksList((prevTasks) => {
//       const updatedTasks = prevTasks.map((task) =>
//         task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
//       );
//       saveToLocal(TASKS_LIST_KEY, updatedTasks);
//       return updatedTasks;
//     });
//   }, []);

//   const sharedProps = {
//     isEditing,
//     setIsEditing,
//     editingTaskId,
//     setEditingTaskId,
//     editTask,
//     deleteTask,
//     checkInputRefs,
//     handleCheck,
//   };

//   const handleDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return;

//     const sourceKey = source.droppableId;
//     const destKey = destination.droppableId;

//     if (sourceKey === destKey) {
//       // إعادة ترتيب داخل نفس القسم
//       const updatedSection = Array.from(filteredTasks[sourceKey]);
//       const [movedTask] = updatedSection.splice(source.index, 1);
//       updatedSection.splice(destination.index, 0, movedTask);

//       // تحديث tasksList بالكامل
//       const updatedTasksList = [...tasksList];
//       const updatedIds = updatedSection.map((task) => task.id);

//       updatedIds.forEach((id, i) => {
//         const idx = updatedTasksList.findIndex((task) => task.id === id);
//         if (idx !== -1) {
//           updatedTasksList[idx] = updatedSection[i];
//         }
//       });

//       setTasksList(updatedTasksList);
//       saveToLocal(TASKS_LIST_KEY, updatedTasksList);
//     } else {
//       // نقل بين قسمين مختلفين
//       const sourceTasks = Array.from(filteredTasks[sourceKey]);
//       const destTasks = Array.from(filteredTasks[destKey]);
//       const [movedTask] = sourceTasks.splice(source.index, 1);
//       destTasks.splice(destination.index, 0, movedTask);

//       const updatedList = tasksList.map((task) => {
//         if (task.id === movedTask.id) {
//           return {
//             ...task,
//             isCompleted:
//               destKey.toLowerCase().includes("completed") ? true : false,
//           };
//         }
//         return task;
//       });

//       setTasksList(updatedList);
//       saveToLocal(TASKS_LIST_KEY, updatedList);
//     }
//   };

//   useEffect(() => {
//     setShowCompleted(getSessionBool("showCompleted"));
//     setShowPriority(getSessionBool("showPriority"));
//     setShowDueDate(getSessionBool("showDueDate"));
//   }, []);

//   const renderSection = (tasks, title, key) => (
//     <div className="mb-4">
//       <h5 className="text-capitalize">{title}</h5>
//       <Droppable droppableId={key}>
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {tasks.map((task, index) => (
//               <Draggable
//                 key={task.id}
//                 draggableId={task.id.toString()}
//                 index={index}
//               >
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <CardTask task={task} {...sharedProps} />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );

//   return (
//     <>
//       {tasksList.length === 0 || filteredTasks.namePage.length === 0 ? (
//         <NoTasksPlaceholder currentCategory={currentCategory} />
//       ) : (
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="container">
//             <h4 className="text-text-capitalize mb-3">Today's Tasks</h4>
//             {(filteredTasks.todayCompleted.length > 0 ||
//               filteredTasks.todayIncomplete.length > 0) && (
//               <>
//                 {renderSection(
//                   filteredTasks.todayCompleted,
//                   "completed tasks",
//                   "todayCompleted"
//                 )}
//                 {renderSection(
//                   filteredTasks.todayIncomplete,
//                   "incompleted tasks",
//                   "todayIncomplete"
//                 )}
//               </>
//             )}

//             <h4 className="text-text-capitalize mb-3">Other Tasks</h4>
//             {(filteredTasks.otherCompleted.length > 0 ||
//               filteredTasks.otherInComplete.length > 0) && (
//               <>
//                 {renderSection(
//                   filteredTasks.otherCompleted,
//                   "completed tasks",
//                   "otherCompleted"
//                 )}
//                 {renderSection(
//                   filteredTasks.otherInComplete,
//                   "incompleted tasks",
//                   "otherInComplete"
//                 )}
//               </>
//             )}
//           </div>
//         </DragDropContext>
//       )}
//     </>
//   );
// }

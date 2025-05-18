// import AllTasks from "../allTasks/AllTasks";

// export default function TaskSection({
//   isEditing,
//   setIsEditing,
//   editingTaskId,
//   setEditingTaskId,
//   editTask,
//   deleteTask,
//   checkInputRefs,
//   handleCheck,
//   tasks,
//   title,
// }) {
//   if (!tasks || tasks.length === 0) return null;

//   return (
//     <>
//       <AllTasks
//         isEditing={isEditing}
//         setIsEditing={setIsEditing}
//         editingTaskId={editingTaskId}
//         setEditingTaskId={setEditingTaskId}
//         editTask={editTask}
//         deleteTask={deleteTask}
//         checkInputRefs={checkInputRefs}
//         handleCheck={handleCheck}
//         tasks={tasks}
//         title={title}
//       />
//     </>
//   );
// }










import AllTasks from "../allTasks/AllTasks";

export default function TaskSection({
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
  if (!tasks || tasks.length === 0) return null;

  return (
    <>
    {/* <DragDropContext> */}
      <AllTasks
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
        editTask={editTask}
        deleteTask={deleteTask}
        checkInputRefs={checkInputRefs}
        handleCheck={handleCheck}
        tasks={tasks}
        title={title}
      />
      {/* </DragDropContext> */}
    </>
  );
}





























// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// // import { Droppable, Draggable } from "@hello-pangea/dnd";
// import CardTask from "../CardTask/CardTask";

// export default function TaskSection({ tasks, title, ...props }) {
//   const droppableId = title.toLowerCase().replace(/\s/g, "");

//   return (
//     <div className="mb-4">
//       <h5 className="text-capitalize">{title}</h5>

//       <Droppable droppableId={droppableId}>
//         {(provided) => (
//           <div ref={provided.innerRef} {...provided.droppableProps}>
//             {tasks.map((task, index) => (
//               <Draggable key={task.id} draggableId={task.id} index={index}>
//                 {(provided, snapshot) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     className={`mb-2 ${snapshot.isDragging ? "bg-light" : ""}`}
//                   >
//                     <CardTask task={task} {...props} />
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
// }


















// TaskSection.jsx
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import {
//   SortableContext,
//   arrayMove,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import AllTasks from "../allTasks/AllTasks";

// export default function TaskSection({
//   isEditing,
//   setIsEditing,
//   editingTaskId,
//   setEditingTaskId,
//   editTask,
//   deleteTask,
//   checkInputRefs,
//   handleCheck,
//   tasks,
//   title,
//   onDragEnd,
// }) {
//   if (!tasks || tasks.length === 0) return null;

//   return (
//     <>
//       <DndContext
//         collisionDetection={closestCenter}
//         onDragEnd={(event) => onDragEnd(event, tasks, title)}
//       >
//         <SortableContext
//           items={tasks.map((task) => task.id)}
//           strategy={verticalListSortingStrategy}
//         >
//           <AllTasks
//             isEditing={isEditing}
//             setIsEditing={setIsEditing}
//             editingTaskId={editingTaskId}
//             setEditingTaskId={setEditingTaskId}
//             editTask={editTask}
//             deleteTask={deleteTask}
//             checkInputRefs={checkInputRefs}
//             handleCheck={handleCheck}
//             tasks={tasks}
//             title={title}
//           />
//         </SortableContext>
//       </DndContext>
//     </>
//   );
// }

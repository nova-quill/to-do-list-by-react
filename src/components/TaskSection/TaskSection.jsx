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
    </>
  );
}

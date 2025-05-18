import { useMemo } from "react";

function getTodayDate(date = null) {
  let today = new Date();
  if (date) {
    today = new Date(date);
  }
  today.setHours(0, 0, 0, 0);
  return today.getTime();
}

export default function useFilteredTasks(tasks, filters) {


 const {
    currentCategory,
    showCompleted,
    showPriority,
    showDueDate,
    searchResults,
  } = filters;

  const filterTasks = useMemo(() => {
    let filteredTasks = searchResults.filter((task) => {
      const taskDate = getTodayDate(task.dueDate);
      if (
        currentCategory &&
        currentCategory !== "all" &&
        task.choose_Category !== currentCategory
      ) {
        return false;
      }
      if (showCompleted !== null) {
        if (showCompleted !== task.isCompleted) return false;
      }
      if (showPriority !== null && task.priority !== showPriority) return false;
      if (showDueDate === "Past") return taskDate < getTodayDate(null);
      if (showDueDate === "Upcoming") return taskDate > getTodayDate(null);
      if (showDueDate === "today")
        return task.dueDate ? taskDate === getTodayDate() : "";
      if (showDueDate === "No Date") return task.dueDate === "";
      return true;
    });
    const namePage = tasks.filter(
      (task) => task.choose_Category === currentCategory
    );

    const todayCompleted = filteredTasks.filter((task) =>
      task.dueDate
        ? getTodayDate(task.dueDate) === getTodayDate(null) && task.isCompleted
        : ""
    );

    const todayIncomplete = filteredTasks.filter((task) =>
      task.dueDate
        ? getTodayDate(task.dueDate) === getTodayDate(null) && !task.isCompleted
        : ""
    );
    const otherCompleted = filteredTasks.filter(
      (task) =>
        (getTodayDate(task.dueDate) !== getTodayDate(null) ||
          task.dueDate === "") &&
        task.isCompleted
    );
    const otherInComplete = filteredTasks.filter(
      (task) =>
        (getTodayDate(task.dueDate) !== getTodayDate(null) ||
          task.dueDate === "") &&
        !task.isCompleted
    );
    return {
      todayCompleted,
      todayIncomplete,
      otherCompleted,
      otherInComplete,
      namePage,
      allFiltered: filteredTasks,
    };
  }, [
    searchResults,
    currentCategory,
    showCompleted,
    showPriority,
    showDueDate,
    tasks,
  ]);

  return filterTasks;
}

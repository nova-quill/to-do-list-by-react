import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";


export const useAutoCompleteOptions=(tasksList)=>{
const autoCompleteOptions = useMemo(() => {
    return Array.from(
      new Set(
        tasksList.flatMap((task) => [
          task.taskTitle,
          task.taskDescription,
          task.priority,
          task.choose_Category,
          task.isCompleted ? "completed" : "incompleted",
        ])
      )
    ).filter(Boolean);
  }, [tasksList]);
  return autoCompleteOptions;
}


export  const mapStatusToBoolean = (query) => {
    const statusMap = {
      completed: true,
      done: true,
      finished: true,
      incompleted: false,
      pending: false,
      "not done": false,
    };
    return statusMap[query.trim().toLowerCase()] ?? null;
  }

  export  const useSearchResults =(query,status,tasksList)=>{
  const searchResults = useMemo(() => {
    if (status !== null) {
      return tasksList.filter((task) => task.isCompleted === status);
    }
if (!query.trim()) return tasksList
    const fuse = new Fuse(tasksList, {
      keys: [
        "taskTitle",
        "taskDescription",
        "choose_Category",
        "dueDate",
        "priority",
        "isCompleted",
      ],
      threshold: 0.1,
      useExtendedSearch: true,
    });

    return query.trim() ? fuse.search(query).map((r) => r.item) : tasksList;
  }, [query, tasksList,status]);
  return searchResults;
}


export function useDebounce(value,delay=300){
const [debouncedValue,setDbouncedValue]=useState(value)

useEffect(()=>{
const handler=setTimeout(()=>{
  setDbouncedValue(value)
},delay)

return ()=>{
  clearTimeout(handler)
}

},[value,delay])
return debouncedValue;
} 
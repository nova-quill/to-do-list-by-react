import React, { createContext, useState, useContext } from "react";
// import Fuse from "fuse.js";
import { tasksListContext } from "./TasksProvider";
import { useAutoCompleteOptions, mapStatusToBoolean, useSearchResults, useDebounce } from "../utils/searchUtils";
import { useDeferredValue } from "react";

const SearchRefContext = createContext(null);

export const useSearchRef = () => useContext(SearchRefContext);

export default function SearchRefProvider({ children }) {
  const { tasksList } = useContext(tasksListContext);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  // const autoCompleteOptions = useMemo(() => {
  //   return Array.from(
  //     new Set(
  //       tasksList.flatMap((task) => [
  //         task.taskTitle,
  //         task.taskDescription,
  //         task.priority,
  //         task.choose_Category,
  //         task.isCompleted ? "completed" : "incompleted",
  //       ])
  //     )
  //   ).filter(Boolean);
  // }, [tasksList]);
const autoCompleteOptions=useAutoCompleteOptions(tasksList);
  // const mapStatusToBoolean = (query) => {
  //   const statusMap = {
  //     completed: true,
  //     done: true,
  //     finished: true,
  //     incompleted: false,
  //     pending: false,
  //     "not done": false,
  //   };
  //   return statusMap[query.trim().toLowerCase()] ?? null;
  // };

const debouncedQuery=useDebounce(query,300)
 const defferredQuery=useDeferredValue(debouncedQuery);


// const statusMap=mapStatusToBoolean(defferredQuery)

const statusMap=mapStatusToBoolean(defferredQuery)

  // const searchResults = useMemo(() => {
  //   const status = mapStatusToBoolean;
  //   if (status !== null) {
  //     return tasksList.filter((task) => task.isCompleted === status);
  //   }

// const searchResults=useSearchResults(defferredQuery,statusMap,tasksList);
const searchResults=useSearchResults(defferredQuery,statusMap,tasksList);


  // const searchResults = useMemo(() => {
  //   const status = mapStatusToBoolean(query);
  //   if (status !== null) {
  //     return tasksList.filter((task) => task.isCompleted === status);
  //   }

  //   const fuse = new Fuse(tasksList, {
  //     keys: [
  //       "taskTitle",
  //       "taskDescription",
  //       "choose_Category",
  //       "dueDate",
  //       "priority",
  //       "isCompleted",
  //     ],
  //     threshold: 0.1,
  //     useExtendedSearch: true,
  //   });

  //   return query.trim() ? fuse.search(query).map((r) => r.item) : tasksList;
  // }, [query, tasksList]);

  return (
    <SearchRefContext.Provider
      value={{
        query,
        setQuery,
        searchResults,
        inputValue,
        setInputValue,
        autoCompleteOptions,
      }}
    >
      {children}
    </SearchRefContext.Provider>
  );
}

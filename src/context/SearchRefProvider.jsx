import React, { createContext, useState, useContext } from "react";
import { tasksListContext } from "./TasksProvider";
import {
  useAutoCompleteOptions,
  mapStatusToBoolean,
  useSearchResults,
  useDebounce,
} from "../utils/searchUtils";
import { useDeferredValue } from "react";

const SearchRefContext = createContext(null);

export const useSearchRef = () => useContext(SearchRefContext);

export default function SearchRefProvider({ children }) {
  const { tasksList } = useContext(tasksListContext);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const autoCompleteOptions = useAutoCompleteOptions(tasksList);

  const debouncedQuery = useDebounce(query, 300);
  const defferredQuery = useDeferredValue(debouncedQuery);

  const statusMap = mapStatusToBoolean(defferredQuery);

  const searchResults = useSearchResults(defferredQuery, statusMap, tasksList);

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

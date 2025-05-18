import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { initCurrentCategoryFromLocal } from "../utils/storage";

export const CurrentCategoryContext = createContext();

export default function TypeCategoryProvider({ children }) {
  const [currentCategory , setCurrentCategory] = useState(()=>initCurrentCategoryFromLocal());
  // const [currentCategory , setCurrentCategory] = useState(null);

  return (
    <CurrentCategoryContext.Provider value={{ currentCategory , setCurrentCategory}}>
      {children}
    </CurrentCategoryContext.Provider>
  );
}

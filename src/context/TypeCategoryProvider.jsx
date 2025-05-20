import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { initCurrentCategoryFromSession } from "../utils/storage";

export const CurrentCategoryContext = createContext();

export default function TypeCategoryProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState(() =>
    initCurrentCategoryFromSession()
  );

  //   const [currentCategory, setCurrentCategory] = useState(null);
  //   useEffect(()=>{
  // setCurrentCategory( initCurrentCategoryFromLocal())
  //   },[])


  return (
    <CurrentCategoryContext.Provider
      value={{ currentCategory, setCurrentCategory }}
    >
      {children}
    </CurrentCategoryContext.Provider>
  );
}

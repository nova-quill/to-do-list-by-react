import React, { createContext, useRef} from 'react'
import { useContext } from "react";

import { useCallback } from 'react';

const NavRefContext =createContext(null);
export const useNavRef = () => useContext(NavRefContext);

export default function NavRefProvider({children}) {

  const ulRef=useRef(null);
const scrollToEnd =useCallback(()=>{
  ulRef.current
      ? (ulRef.current.scrollTo({
        left:ulRef.current.scrollWidth,
        behavior:'smooth'
      }))
      : "";
},[])

  return (
  <NavRefContext.Provider value={{setUlRef:(el)=>(ulRef.current=el),scrollToEnd}}>
    {children}
  </NavRefContext.Provider>
  )
}

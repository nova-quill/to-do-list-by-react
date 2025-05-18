import React from 'react'
import { createContext} from 'react'
import { useState } from 'react';
import { initTasksListFromLocal } from '../utils/storage';

export const tasksListContext=createContext();

export default function TasksProvider({children}) {
  const [tasksList, setTasksList] = useState(()=>initTasksListFromLocal())

  return (
    <tasksListContext.Provider value={{tasksList,setTasksList}}>
      {children}
    </tasksListContext.Provider>
  )
}

import { createContext ,useState} from 'react';
export const TaskFilterContext = createContext();

export function TaskFilterProvider({ children }) {
  const [showCompleted, setShowCompleted] = useState(null);
  return (
    <TaskFilterContext.Provider value={{ showCompleted, setShowCompleted }}>
      {children}
    </TaskFilterContext.Provider>
  );
}

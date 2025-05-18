// import react,{createContext}
import { createContext ,useState} from 'react';
export const FilterDueDateContext = createContext();

export function FilterDueDateProvider({ children }) {
  const [showDueDate, setShowDueDate] = useState(null);
  return (
    <FilterDueDateContext.Provider value={{ showDueDate, setShowDueDate }}>
      {children}
    </FilterDueDateContext.Provider>
  );
}

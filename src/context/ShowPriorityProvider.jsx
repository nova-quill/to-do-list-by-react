import { createContext ,useState} from 'react';
export const FilterPriorityContext = createContext();

export function FilterPriorityProvider({ children }) {
  const [showPriority, setShowPriority] = useState(null);
  return (
    <FilterPriorityContext.Provider value={{ showPriority, setShowPriority }}>
      {children}
    </FilterPriorityContext.Provider>
  );
}

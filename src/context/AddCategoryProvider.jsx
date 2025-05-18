import React, { createContext, useState } from 'react';
import { initCategoriesFromLocal } from '../utils/storage';
export const AddCategoryContext = createContext();

export const AddCategoryProvider = ({ children }) => {
  
  const [categories, setCategories] = useState(() => initCategoriesFromLocal());
  
  return (
    <AddCategoryContext.Provider value={{ categories,setCategories }}>
      {children}
    </AddCategoryContext.Provider>
  );
};

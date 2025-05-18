import {
  CATEGORIES_KEY,
  CURRENT_CATEGORY_KEY,
  TASKS_LIST_KEY,
} from "./constants";

export const saveToLocal = (key, value) => {
  try {
    const data = JSON.stringify(value);

    localStorage.setItem(key, data);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

export const getFromLocal = (key) => {
  try {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  } catch (error) {
    console.error("Error get from localStorage", error);
    return null;
  }
};

export const removeFromLocal = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
};
export const initCategoriesFromLocal = () => {
  const data = getFromLocal(CATEGORIES_KEY);
  return Array.isArray(data) && data.length > 0
    ? data
    : ["all", "personal", "work", "study", "tarfeh", "shopping"];
};

export const initCurrentCategoryFromLocal = () => {
  return getFromLocal(CURRENT_CATEGORY_KEY) || "all";
};

export const initTasksListFromLocal = () => {
  return getFromLocal(TASKS_LIST_KEY) || [];
};

export const getSessionBool = (key) => {
  return JSON.parse(sessionStorage.getItem(key)) ?? null;
};

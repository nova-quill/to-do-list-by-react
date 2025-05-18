import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { AddCategoryProvider } from "../../context/AddCategoryProvider";
import TypeCategoryProvider from "../../context/TypeCategoryProvider";
import TasksProvider from "../../context/TasksProvider";
import NavRefProvider from "../../context/NavRefProvider";
import { TaskFilterProvider } from "../../context/TaskFilterProvider";
import { FilterPriorityProvider } from "../../context/ShowPriorityProvider";
import { FilterDueDateProvider } from "../../context/ShowDueDateProvider";
import SearchRefProvider from "../../context/SearchRefProvider";

export default function Layout() {
  return (
    <>
      <FilterDueDateProvider>
        <FilterPriorityProvider>
          <TaskFilterProvider>
            <NavRefProvider>
              <TasksProvider>
                <SearchRefProvider>
                  <TypeCategoryProvider>
                    <AddCategoryProvider>
                      <Navbar />
                      <Outlet />
                    </AddCategoryProvider>
                  </TypeCategoryProvider>
                </SearchRefProvider>
              </TasksProvider>
            </NavRefProvider>
          </TaskFilterProvider>
        </FilterPriorityProvider>
      </FilterDueDateProvider>
    </>
  );
}

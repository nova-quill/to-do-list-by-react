import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import FormAddOrEditeTask from "./features/taskForm/FormAddOrEditeTask";
import FilterTasks from "./components/FilterTasks/FilterTasks";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/:namePage", element: <FilterTasks /> },
      { path: "/", element: <FilterTasks /> },
      { path: "/taskFormAdd", element: <FormAddOrEditeTask /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

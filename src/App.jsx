import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import FormAddOrEditeTask from "./features/taskForm/FormAddOrEditeTask";
import FilterTasks from "./components/FilterTasks/FilterTasks";
import DetailsTask from "./components/DetailsTask/DetailsTask";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/:namePage", element: <FilterTasks /> },
      { path: "/", element: <FilterTasks /> },
      { path: "/taskFormAdd", element: <FormAddOrEditeTask /> },
      { path: "/taskId", element: <DetailsTask/> },
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

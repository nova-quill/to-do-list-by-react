import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import AllTasks from './components/allTasks/AllTasks'
import FormAddOrEditeTask from './features/taskForm/FormAddOrEditeTask'
import FilterTasks from './components/FilterTasks/FilterTasks'


const router=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    // {path:'/:namePage',element:<AllTasks/>},
    // {path:'/',element:<AllTasks/>},

      {path:'/:namePage',element:<FilterTasks/>},
    {path:'/',element:<FilterTasks/>},
    {path:'/taskFormAdd',element:<FormAddOrEditeTask/>},
  ]}
])

function App() {

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App

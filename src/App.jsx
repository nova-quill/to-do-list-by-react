import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Layout from './components/layout/Layout'
import Footer from './components/footer/Footer'
import AllTasks from './components/allTasks/AllTasks'
const router=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:'/',element:<AllTasks/>},
    {path:'/personal',element:<Footer/>},
    {path:'/study',element:<Footer/>},
    {path:'/tarfeh',element:<Footer/>},
    {path:'/shopping',element:<Footer/>}


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

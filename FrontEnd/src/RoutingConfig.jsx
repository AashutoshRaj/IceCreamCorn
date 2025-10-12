import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Layout from './Layout'
import Login from './Pages/Login/Login'
import Signup from './Pages/Login/Signup'
import ProductListPage from './Pages/HomePageComponents/ProductListPage/ProductListPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
       {
        path: "/",
        element: <HomePage/>,
        name: "HomePage"
      },
      {
        path: "/login",
        element: <Login/>,
        name: "HomePage"
      },
      {
        path: "/signup",
        element: <Signup/>,
        name: "HomePage"
      },
       {
        path: "/product_list",
        element: <ProductListPage/>,
        name: "HomePage"
      },
    ]
  }
])


const RoutingConfig = () => {
  return (
    <RouterProvider router={router}/>
      
   
  )
}

export default RoutingConfig

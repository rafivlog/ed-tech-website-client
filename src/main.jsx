import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/home';
import Register from './components/Register/register';
import Login from './components/Login/Login';
import Main from './components/layout/Main';
import Student from './components/Student/Student';
import Teacher from './components/Teacher/Teacher'
import Studentdetail from './components/Studenddetail/Studentdetail';
import Studentinfo from './components/Studentinfo/Studentinfo';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path : '/',
        element:<Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/student',
        element: <Student></Student>
      },
      {
        path: '/teacher',
        element : <Teacher></Teacher>
      },
      {
        path:'/studentdetail',
        element: <Studentdetail></Studentdetail>,
        
      },
      {
        path:'/users',
        element: <Studentinfo></Studentinfo>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path:'/Studentinfo',
        element: <Studentinfo></Studentinfo>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)

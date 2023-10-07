import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from './compoments/Main/Main';
import Home from './compoments/pages/Layout/Hom/Home';
import Login from './compoments/Login/Login/Login';
import Register from './compoments/Login/Register/Register';
import AuthProviders from './providers/AuthProviders';
// import { router } from './routes/Routes';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
        <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)

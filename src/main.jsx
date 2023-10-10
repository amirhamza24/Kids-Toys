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
import ToyDetails from './compoments/ToyDetails/ToyDetails';
import AllToy from './compoments/AllToy/AllToy';
import AddToy from './compoments/AddToy/AddToy';
import MyToy from './compoments/AllToy/MyToy';
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
        },
        {
            path: '/allToy',
            element: <AllToy></AllToy>
        },
        {
            path: '/addToy',
            element: <AddToy></AddToy>
        },
        {
            path: '/myToy',
            element: <MyToy></MyToy>
        },
        {
            path: '/toyDetails/:id',
            element: <ToyDetails></ToyDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/allAddToy/${params.id}`)
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

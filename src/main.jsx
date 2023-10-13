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
import UpdateToy from './compoments/AllToy/UpdateToy';
import PrivateRoute from './routes/PrivateRoute';
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
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: '/toyDetails/:id',
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/toyDetails/${params.id}`)
        },
        {
            path: '/myToy',
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
            path: "/updateToy/:id",
            element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
            loader: ({ params }) => fetch(`https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/allAddToy/${params.id}`)
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

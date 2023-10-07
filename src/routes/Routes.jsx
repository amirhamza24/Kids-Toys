import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../compoments/Main/Main";
import Home from "../compoments/pages/Layout/Hom/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);
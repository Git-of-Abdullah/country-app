import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  
import "./assets/styles.css"
import { Home } from "./assets/Home";
import { Contact } from "./assets/Contact";
import { CountryPage } from "./assets/CountryPage";


    const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
          path: "/country/:name",
          element: <CountryPage/>
      },
      ]
    },
 
    
        ]);

        ReactDOM.createRoot(document.getElementById("root")).render(
            <RouterProvider router={router} />
          );
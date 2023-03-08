import React, { Fragment } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { DashboardLayout } from "./Layout/DashboardLayout";
import Signin from "./Pages/LoginAndRegister/Signin";
import Signup from "./Pages/LoginAndRegister/Signup";
import Account from "./Pages/Account";
import HomePage from "./Pages/HomePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/dashboard-admin",
          element: <DashboardLayout />,
        },
      ],
    },
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
//

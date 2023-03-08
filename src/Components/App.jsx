import React, { Fragment } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { DashboardLayout } from "./Layout/DashboardLayout";
import HomePage from "./Pages/HomePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
      ],
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
//

import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../UI/Atoms/navigation/Navigation";

export const MainLayout = () => {
  return (
    <>
        <Navigation />
        <Outlet />
    </>
  );
};

import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveDesktop from "../templates/ResponsiveDesktop";
import ResponsiveMobile from "../templates/ResponsiveMobile";
import NavbarHead from "../UI/Atoms/is_mobile_view/navbarHead/NavbarHead";

export const MainLayout = () => {
  return (
    <Fragment>
      <ResponsiveMobile>
        <NavbarHead />
        <Outlet />
      </ResponsiveMobile>
      <ResponsiveDesktop>
        <Outlet />
      </ResponsiveDesktop>
    </Fragment>
  );
};

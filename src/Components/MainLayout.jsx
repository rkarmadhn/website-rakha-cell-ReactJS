import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./UI/organisms/is_mobile_view/NavbarBottom/NavbarBottom";
import NavbarHead from "./UI/organisms/is_mobile_view/NavbarHead/NavbarHead";

export const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isWidth]);
  return (
    <Fragment>
      {isMobile ? (
        <div className="is_mobile">
          <NavbarHead />
          <Outlet />
          <NavbarBottom />
        </div>
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </Fragment>
  );
};

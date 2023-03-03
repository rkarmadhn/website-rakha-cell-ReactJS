import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export const DashboardLayout = () => {
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
          <Outlet />
        </div>
      ) : (
        <div className="flex">
          <Dashboard />
          <Outlet />
        </div>
      )}
    </Fragment>
  );
};

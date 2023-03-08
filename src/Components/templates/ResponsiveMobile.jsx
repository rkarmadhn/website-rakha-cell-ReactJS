import React, { Fragment, useEffect, useState } from "react";
import ResponsiveDesktop from "./ResponsiveDesktop";

export default function ResponsiveMobile(props) {
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
  return <Fragment>{isMobile ? <div className="is_mobile">{props.children}</div> : <ResponsiveDesktop />}</Fragment>;
}

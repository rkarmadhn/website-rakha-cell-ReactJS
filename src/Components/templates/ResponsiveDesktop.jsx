import React, { Fragment, useEffect, useState } from "react";
import ResponsiveMobile from "./ResponsiveMobile";

export default function ResponsiveDesktop(props) {
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
  return <>{isMobile ? <></> : <div className="is_desktop">{props.children}</div>}</>;
}

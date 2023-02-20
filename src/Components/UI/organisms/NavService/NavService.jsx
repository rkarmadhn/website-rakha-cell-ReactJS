import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavService.css";

export default function NavService() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDown, setIsDown] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (width > 639.98) {
        if (scrollPosition > window.scrollY) {
          setIsDown(true);
        } else {
          setIsDown(false);
        }
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [width, scrollPosition]);
  return (
    <div className={`nav-service shadow-md ${isDown ? 'scrollup' : 'scrolldown'}`}>
      <div className="head-text">
        <Link to="/" relative="path">
          Iphone
        </Link>
        <Link to="/service/android/samsung" relative="path">
          Samsung
        </Link>
        <Link to="/" relative="path">
          Oppo
        </Link>
        <Link to="/" relative="path">
          Vivo
        </Link>
        <Link to="/" relative="path">
          Realme
        </Link>
        <Link to="/" relative="path">
          Pocophone
        </Link>
        <Link to="/" relative="path">
          Xiaomi
        </Link>
      </div>
    </div>
  );
}

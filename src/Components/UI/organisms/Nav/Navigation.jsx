import { IconAlignCenter, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Containers from "../../Atoms/Containers/Containers";
import "./Navigation.css";

const Navigation = () => {
  const [show, setShow] = useState(false);
  function handleNav() {
    setShow(!show);
  }
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
      if (width > 575.98) {
        if (scrollPosition > window.scrollY) {
          setIsDown(true)
        } else {
          setIsDown(false)
        }
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [width, scrollPosition]);

  return (
    <nav className={`bg-white text-neutral-700 shadow-lg ${isDown ? 'scrollup' : 'scrolldown'}`} >
      <Containers className={"flex justify-between items-center md:px-8 p-4"}>
        <div className="navbar-brand">
          <a href="/">Logo</a>
        </div>
        <div className={`navbar-items md:flex md:items-center md:gap-x-3 ${show ? "show" : ""}`}>
          <div className="flex justify-between items-center sm:hidden shadow-lg navhead px-5">
            <div className="navbar-brand">
              <a href="/">Logo</a>
            </div>
            <button onClick={handleNav}>
              <IconX className="w-8 h-8" />
            </button>
          </div>
          <div className="nav-wrap sm:gap-x-4 sm:flex">
            <a href="" className="navlinks">
              Home
            </a>
            <a to="/about" className="navlinks">
              About Us
            </a>
          </div>
        </div>
        <div className="navbar-button md:hidden flex justify-center items-center">
          <button onClick={handleNav}>
            <IconAlignCenter className="w-8 h-8" />
          </button>
        </div>
      </Containers>
    </nav>
  );
};

export default Navigation;

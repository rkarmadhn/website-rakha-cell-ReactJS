import { IconAlignCenter, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <nav className={`dark:bg-stone-900 dark:text-white shadow-md ${isDown ? "scrollup" : "scrolldown"}`}>
      <Containers className={"flex justify-between items-center sm:px-8 sm:py-4"}>
        <div className="navbar-brand">
          <a href="/"></a>
        </div>
        <div className={`navbar-items sm:flex sm:items-center sm:gap-x-3 ${show ? "show" : ""}`}>
          <div className="flex justify-between items-center sm:hidden shadow-lg navhead">
            <div className="navbar-brand">
              <a href="/">3</a>
            </div>
            <button onClick={handleNav}>
              <IconX className="w-8 h-8" />
            </button>
          </div>
          <div className="nav-wrap sm:gap-x-4 sm:flex">
            <Link to="/" className="navlinks">
              Home
            </Link>
            <Link to="/" className="navlinks">
              Tentang Kami
            </Link>
            <Link to="/service/iphone" className="navlinks">
              Harga
            </Link>
            <Link to='/' className="navlinks">
              Lokasi
            </Link>
          </div>
        </div>
        <div className="navbar-button flex items-center sm:hidden">
          <button onClick={handleNav}>
            <IconAlignCenter className="w-8 h-8" />
          </button>
        </div>
      </Containers>
    </nav>
  );
};

export default Navigation;

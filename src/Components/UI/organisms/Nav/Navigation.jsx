import { IconAlignCenter, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Containers from "../../Atoms/Containers/Containers";
import "./Navigation.css";

const Navigation = () => {
  const [show, setShow] = useState(false);
  function handleNav() {
    setShow(!show);
  }
  return (
      <nav className={"bg-white text-neutral-700 shadow-lg"}>
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
}

export default Navigation;

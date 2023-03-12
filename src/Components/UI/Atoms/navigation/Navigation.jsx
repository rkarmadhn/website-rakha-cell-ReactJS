import { IconAlignJustified, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveDesktop from "../../../templates/ResponsiveDesktop";
import ResponsiveMobile from "../../../templates/ResponsiveMobile";
import "./Navigation.scss";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <ResponsiveDesktop>
        <div className="navbar flex justify-between items-center shadow-md py-4 px-8" style={{ backgroundColor: "#40513B", color: "#EDF1D6" }}>
          <div className="navbar-logo">
            <Link>Logo</Link>
          </div>
          <div className="navbar-items flex items-center gap-4">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </ResponsiveDesktop>
      <ResponsiveMobile>
        <div className={`navbar ${isOpen ? 'show' : ''}`}>
          <div className="navbar-logo flex justify-between items-center shadow-md p-4" style={{ backgroundColor: "#40513B", color: "#EDF1D6" }}>
            <Link>logo</Link>
            <IconAlignJustified onClick={handleOpen}/>
          </div>
          <div className="navbar-items">
            <div className="navbar-items-head shadow-md">
              <Link>logo</Link>
              <IconX onClick={handleOpen}/>
            </div>
            <div className="items">
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </div>
          </div>
        </div>
      </ResponsiveMobile>
    </>
  );
}

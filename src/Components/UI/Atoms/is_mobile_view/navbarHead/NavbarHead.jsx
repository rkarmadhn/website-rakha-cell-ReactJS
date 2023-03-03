import React from "react";
import "./NavbarHead.scss";
import { IconBellRinging, IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function NavbarHead() {
  return (
    <div className="head_template">
      <button>
        <IconBellRinging />
      </button>
      <Link to="/login">
        <IconUserCircle />
      </Link>
    </div>
  );
}

export default NavbarHead;

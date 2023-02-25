import { IconBellRinging, IconUserCircle } from "@tabler/icons-react";
import React from "react";
import "./NavbarHead.scss";

export default function NavbarHead() {
  return (
    <div className="navbar_head">
      <div className="is_icons">
        <button type="button">
          <IconBellRinging />
        </button>
        
        <button type="button">
          <IconUserCircle />
        </button>
      </div>
    </div>
  );
}

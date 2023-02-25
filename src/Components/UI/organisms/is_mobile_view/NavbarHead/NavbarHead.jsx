import { IconBellRinging, IconUserCircle } from "@tabler/icons-react";
import React from "react";
import "./NavbarHead.scss";

export default function NavbarHead() {
  return (
    <div className="navbar_head shadow shadow-stone-200">
      <div className="is_icons">
        <button type="button" className="focus:text-neutral-400 hover:text-neutral-400">
          <IconBellRinging />
        </button>
        
        <button type="button" className="focus:text-neutral-400 hover:text-neutral-400">
          <IconUserCircle />
        </button>
      </div>
    </div>
  );
}

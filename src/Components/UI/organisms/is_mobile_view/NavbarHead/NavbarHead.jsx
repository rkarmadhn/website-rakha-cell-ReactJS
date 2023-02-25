import { IconAlignCenter, IconBellRinging, IconUserCircle } from "@tabler/icons-react";
import React from "react";
import './NavbarHead.scss'

export default function NavbarHead() {
  return (
    <div className="navbar_head shadow shadow-stone-200">
      <div className="is_icons">
        <IconAlignCenter />
      </div>
      <div className="is_icons">
        <IconBellRinging />
        <IconUserCircle />
      </div>
    </div>
  );
}

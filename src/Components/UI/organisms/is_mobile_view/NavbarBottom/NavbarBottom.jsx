import { IconBrandWhatsapp, IconCategory, IconHome, IconMailOpened, IconMap } from "@tabler/icons-react";
import React from "react";
import "./NavbarBottom.scss";

export default function NavbarBottom() {
  return (
    <div className="navbar_bottom">
      <div>
        <IconCategory />
      </div>
      <div>
        <IconMailOpened />
      </div>
      <div className="index">
        <IconHome />
      </div>
      <div>
        <IconBrandWhatsapp />
      </div>
      <div>
        <IconMap />
      </div>
    </div>
  );
}

import { IconBrandWhatsapp, IconCategory, IconHome, IconMailOpened, IconMap } from "@tabler/icons-react";
import React from "react";
import "./NavbarBottom.scss";

export default function NavbarBottom() {
  return (
    <div className="navbar_bottom">
      <div>
        <button type="button">
          <IconCategory />
        </button>
      </div>
      <div>
        <button type="button">
          <IconMailOpened />
        </button>
      </div>
      <div>
        <button type="button" className="index">
          <IconHome />
        </button>
      </div>
      <div>
        <button type="button">
          <IconBrandWhatsapp />
        </button>
      </div>
      <div>
        <button type="button">
          <IconMap />
        </button>
      </div>
    </div>
  );
}

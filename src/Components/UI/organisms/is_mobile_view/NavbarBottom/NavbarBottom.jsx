import { IconBrandWhatsapp, IconCategory, IconHome, IconMailOpened, IconMap } from "@tabler/icons-react";
import React from "react";
import "./NavbarBottom.scss";

export default function NavbarBottom() {
  return (
    <div className="navbar_bottom">
      <div>
        <button type="button" className="focus:text-neutral-400 hover:text-neutral-400">
          <IconCategory />
        </button>
      </div>
      <div>
        <button type="button" className="focus:text-neutral-400 hover:text-neutral-400">
          <IconMailOpened />
        </button>
      </div>
      <div>
        <button type="button" className="index focus:text-neutral-400 hover:text-neutral-400">
          <IconHome />
        </button>
      </div>
      <div>
        <button type="button" className="focus:text-neutral-400 hover:text-neutral-400">
          <IconBrandWhatsapp />
        </button>
      </div>
      <div>
        <button type="button" className="focus:text-neutral-400 hover:text-neutral-400">
          <IconMap />
        </button>
      </div>
    </div>
  );
}

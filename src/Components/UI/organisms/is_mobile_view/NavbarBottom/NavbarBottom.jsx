import { IconBrandWhatsapp, IconCategory, IconHome, IconMailOpened, IconMapPin  } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarBottom.scss";

export default function NavbarBottom() {
  return (
    <div className="navbar_bottom">
      <div>
        <Link to='/about'>
          <IconCategory />
        </Link>
      </div>
      <div>
        <Link to=''>
          <IconMailOpened />
        </Link>
      </div>
      <div>
        <Link to='/' className="index">
          <IconHome />
        </Link>
      </div>
      <div>
        <Link to=''>
          <IconBrandWhatsapp />
        </Link>
      </div>
      <div>
        <Link to=''>
          <IconMapPin />
        </Link>
      </div>
    </div>
  );
}

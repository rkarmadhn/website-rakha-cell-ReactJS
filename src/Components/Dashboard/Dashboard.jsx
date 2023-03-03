import { IconBrandApple, IconBrandMyOppo, IconBrandSamsungpass, IconLayoutCollage, IconMessageCircle, IconUserCircle } from "@tabler/icons-react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="side-menus">
        <div className="logo-brand">
          <p>Logo</p>
        </div>
        <div className="menus">
          <p className="">MAIN MENU</p>
          <Link to=''>
            <IconLayoutCollage />
            Dashboard
          </Link>
          <Link to=''>
            <IconBrandApple />
            Iphone
          </Link>
          <Link to=''>
            <IconBrandSamsungpass />
            Samsung
          </Link>
          <Link to=''>
            <IconBrandMyOppo />
            Oppo
          </Link>
          <Link to=''>Vivo</Link>
          <Link to=''>Xiaomi</Link>
          <Link to=''>Pocophone</Link>
          <Link to=''>Realme</Link>
          <Link to=''>
            <IconUserCircle />
            Users
          </Link>
          <Link to=''>
            <IconMessageCircle />
            Comment
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

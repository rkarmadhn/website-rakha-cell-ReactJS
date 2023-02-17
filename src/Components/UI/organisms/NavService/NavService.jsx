import React from "react";
import { Link } from "react-router-dom";
import "./NavService.css";

export default function NavService() {
  return (
    <div className="nav-service shadow-md">
      <div className="head-text">
        <Link to='' relative="path">Iphone</Link>
        <Link to='/service/android/samsung' relative="path">Samsung</Link>
        <Link to='/service/android/oppo' relative="path">Oppo</Link>
        <Link to='' relative="path">Vivo</Link>
        <Link to='' relative="path">Realme</Link>
        <Link to='' relative="path">Pocophone</Link>
        <Link to='' relative="path">Xiaomi</Link>
      </div>
    </div>
  );
}

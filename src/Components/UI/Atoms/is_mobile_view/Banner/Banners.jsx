import clsx from "clsx";
import React from "react";
import "./Banners.scss";

export default function Banners(props) {
  return (
    <div {...props} className={clsx(props.className, "is_banner_mobile")}>
      <p>{props.text || props.children}</p>
    </div>
  );
}

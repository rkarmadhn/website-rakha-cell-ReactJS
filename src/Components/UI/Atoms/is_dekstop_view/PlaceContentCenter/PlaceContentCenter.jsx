import clsx from "clsx";
import React from "react";

function PlaceContentCenter(props) {
  return <div {...props} className={clsx(props.className, "grid place-content-center text-center md:flex md:justify-center md:items-center")}>{props.children}</div>;
}

export default PlaceContentCenter;

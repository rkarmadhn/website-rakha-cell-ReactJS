import clsx from "clsx";
import React from "react";

export default function Containers(props) {
  const { children, className } = props;
  return <div {...props}  className={clsx(className, "container-md mx-auto md:mx-0")}>{children}</div>;
}

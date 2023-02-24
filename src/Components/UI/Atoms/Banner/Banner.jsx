import clsx from "clsx";
import React from "react";
import "./Banner.scss";

export default function Banner(props) {
  const { children, className } = props;
  return (
    <div className={clsx(className, "banner bg-cover bg-center bg-no-repeat")}>
      {children}
    </div>
  );
}

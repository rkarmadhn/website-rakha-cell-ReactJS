import clsx from "clsx";
import React from "react";

export default function TitleRowKategori(props) {
  return (
    <h5 {...props} className={clsx(props.className, "text-xl font-medium text-center tracking-wide")}>
      {props.text || props.children}
    </h5>
  );
}

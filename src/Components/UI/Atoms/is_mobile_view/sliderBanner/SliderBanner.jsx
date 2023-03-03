import React from "react";
import "./SliderBanner.scss";
import clsx from "clsx";

function SliderBanner(props) {
  return (
    <div className="">
      <div className={clsx(props.className, "slider_banner")}>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}

export default SliderBanner;

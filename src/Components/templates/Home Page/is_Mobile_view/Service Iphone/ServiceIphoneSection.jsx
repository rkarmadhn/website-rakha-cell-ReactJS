import React, { Fragment } from "react";
import Slider from "react-slick";
import HomeCard from "../../../../UI/Atoms/is_mobile_view/HomeCard/HomeCard";

export default function ServiceIphoneSection() {
  const HomeCardSettings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "32px",
    speed: 500,
  };
  return (
    <div className="py-2">
      <h5 className="text-xl font-bold italic m-4">Price Service Iphone</h5>
      <Slider {...HomeCardSettings}>
        <div className="p-1">
          <HomeCard />
        </div>
        <div className="p-1">
          <HomeCard />
        </div>
      </Slider>
    </div>
  );
}

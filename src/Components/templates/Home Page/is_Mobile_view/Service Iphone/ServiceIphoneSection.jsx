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
      <h5 className="text-xl font-semibold italic text-center m-4" style={{color: '#404258'}}>Price Service Iphone</h5>
      <Slider {...HomeCardSettings}>
        <div className="px-2">
          <HomeCard />
        </div>
        <div className="px-2">
          <HomeCard />
        </div>
      </Slider>
    </div>
  );
}

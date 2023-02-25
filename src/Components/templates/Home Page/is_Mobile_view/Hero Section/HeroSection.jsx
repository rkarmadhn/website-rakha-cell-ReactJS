import React, { Component } from "react";
import Slider from "react-slick";
import Banners from "../../../../UI/Atoms/is_mobile_view/Banner/Banners";

export default class HeroSection extends Component {
  render() {
    const heroSettings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      pauseOnHover: true,
      centerMode: true,
      centerPadding: "32px",
      customPaging: function () {
        return <button className="slick-dot"></button>;
      },
    };
    return (
      <div className="is_hero_section_mobile">
        <Slider {...heroSettings}>
          <div className="px-1">
            <Banners className="banner-1" text='Berkualitas, Profesional, Bisa di Tunggu'/>
          </div>
          <div className="px-1">
            <Banners className="banner-2" text='Specialis Repair Apple dan Android'/>
          </div>
        </Slider>
      </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import Banners from "../../../../UI/Atoms/is_mobile_view/Banner/Banners";
import "./HeroSection.scss";

export default class HeroSection extends Component {
  render() {
    const heroSettings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      pauseOnHover: false,
      customPaging: function () {
        return <button className="slick-dot"></button>;
      },
    };
    return (
      <div className="is_hero_section_mobile">
        <Slider {...heroSettings}>
          <div className="px-4">
            <Banners className="banner-1" />
          </div>
          <div className="px-4">
            <Banners className="banner-2" />
          </div>
        </Slider>
      </div>
    );
  }
}

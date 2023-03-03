import React, { Component } from "react";
import Slider from "react-slick";
import SliderBanner from "../../../Atoms/is_mobile_view/sliderBanner/SliderBanner";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4500,
      appendDots: (dots) => <ul style={{ margin: "0px" }}> {dots} </ul>,
      customPaging: (i) => <button className="slick-dot" id={`${i + 1}`}></button>,
    };
    return (
      <div className="slick-carousel">
        <Slider {...settings} className="is_hero_slider">
          <SliderBanner className="banner_1" />
          <SliderBanner className="banner_2" />
        </Slider>
        <p className="footer">Footer</p>
      </div>
    );
  }
}

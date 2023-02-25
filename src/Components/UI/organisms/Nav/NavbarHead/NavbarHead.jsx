import React, { Component } from "react";
import Slider from "react-slick";
import "./NavbarHead.scss";

export default class NavbarHead extends Component {
  render() {
    const settings = {
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 10000,
    };
    return (
      <div className="navbar-head">
        <Slider {...settings}>
          <span className="logo">Rakha Cellular</span>
          <span className="alamat">Jl. Masjid Nurul Ihsan, Jatiwaringin</span>
        </Slider>
      </div>
    );
  }
}

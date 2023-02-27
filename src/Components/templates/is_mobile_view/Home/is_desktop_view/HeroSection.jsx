import React from "react";
import Slider from "react-slick";
import Banner from "../../UI/Atoms/Banner/Banner";

export default function HeroSection() {
  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3900,
    dots: true,
    pauseOnHover: false,
    customPaging: function () {
      return <button className="slick-dot"></button>;
    },
  };

  return (
    <Slider {...settings} className="slick-carousel"> 
      <Banner className="banner-1 w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-white text-center">Berkualitas, Profesional, Bisa di Tunggu</h1>
      </Banner>
      <Banner className="banner-2 w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-white text-center">Specialis Repair Apple dan Android</h1>
      </Banner>
    </Slider>
  );
}

import React from "react";
import Banner from '../../UI/Atoms/Banner/Banner'

export default function HeroSection() {
  return (
    <div className="slick-carousel" id="heroSection">
      <Banner className="banner-1 w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-white text-center">Berkualitas, Profesional, Bisa di Tunggu</h1>
      </Banner>
      <Banner className="banner-2 w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-white text-center">Specialis Repair Apple dan Android</h1>
      </Banner>
    </div>
  );
}

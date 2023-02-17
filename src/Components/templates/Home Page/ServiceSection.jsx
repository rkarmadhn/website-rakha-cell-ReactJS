import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../UI/Atoms/Banner/Banner";
import Containers from "../../UI/Atoms/Containers/Containers";

export default function ServiceSection() {
  return (
    <Containers className="grid md:flex md:items-center gap-2 p-2 sm:px-2 sm:py-2" id="serviceSection">
      <Banner className="md:w-1/2 w-full banner-android">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-white">Service Android</h1>
          <Link to="/service/android/samsung" className="text-white">
            Selanjutnya
          </Link>
        </div>
      </Banner>
      <Banner className="md:w-1/2 w-full banner-iphone">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-white">Service iPhone</h1>
          <Link target="_blank" rel="noopener noreferrer" className="text-white">
            Selanjutnya
          </Link>
        </div>
      </Banner>
    </Containers>
  );
}

import React, { Fragment, useEffect, useState } from "react";
import ResponsiveDesktop from "../templates/ResponsiveDesktop";
import ResponsiveMobile from "../templates/ResponsiveMobile";
import HomeSlider from "../UI/organisms/is_mobile_view/homeSlider/HomeSlider";

function HomePage() {
  return (
    <>
      <ResponsiveMobile className="px-2 pt-16">
        <HomeSlider />
      </ResponsiveMobile>
      <ResponsiveDesktop className='px-8 pt-20'>
        <HomeSlider />
      </ResponsiveDesktop>
    </>
  );
}

export default HomePage;

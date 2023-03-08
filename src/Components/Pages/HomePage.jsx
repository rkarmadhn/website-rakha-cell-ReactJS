import React, { Fragment, useEffect, useState } from "react";
import ResponsiveMobile from "../templates/ResponsiveMobile";
import HomeSlider from "../UI/organisms/is_mobile_view/homeSlider/HomeSlider";
import RowKategoriIphone from "../UI/organisms/is_mobile_view/rowKategori/RowKategoriIphone";
import RowKategoriSamsung from "../UI/organisms/is_mobile_view/rowKategori/RowKategoriSamsung";

function HomePage() {
  return (
    <>
      <ResponsiveMobile>
        <HomeSlider />
        <RowKategoriIphone />
        <RowKategoriSamsung />
      </ResponsiveMobile>
    </>
  );
}

export default HomePage;

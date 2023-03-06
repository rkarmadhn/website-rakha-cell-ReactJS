import React, { Fragment, useEffect, useState } from "react";
import HomeSlider from "../../UI/organisms/is_mobile_view/HomeSlider/HomeSlider";
import RowKategori from "../../UI/organisms/is_mobile_view/rowKategori/RowKategori";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isWidth]);
  return (
    <>
      {isMobile ? (
        <Fragment>
          <HomeSlider />
          <RowKategori />
        </Fragment>
      ) : (
        ""
      )}
    </>
  );
}

export default HomePage;

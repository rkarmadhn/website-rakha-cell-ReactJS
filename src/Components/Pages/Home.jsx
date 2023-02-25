import React, { Fragment, useEffect, useState } from "react";
import HeroSection from "../templates/Home Page/is_Mobile_view/Hero Section/HeroSection";
import NavbarHead from "../UI/organisms/is_mobile_view/NavbarHead/NavbarHead";
import NavbarBottom from "../UI/organisms/is_mobile_view/NavbarBottom/NavbarBottom";
import ServiceIphoneSection from "../templates/Home Page/is_Mobile_view/Service Iphone/ServiceIphoneSection";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
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
    <Fragment>
      {isMobile ? (
        <>
          <HeroSection />
          <ServiceIphoneSection />
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
}

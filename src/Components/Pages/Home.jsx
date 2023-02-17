import React, { Fragment, useState } from "react";
import HeroSection from "../templates/Home Page/HeroSection";
import ServiceSection from "../templates/Home Page/ServiceSection";
import TentangKamiSection from "../templates/Home Page/TentangKamiSection";
import LoadingHomePage from "../templates/Loading/LoadingHomePage";
import Navigation from "../UI/organisms/Nav/Navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1800);
  return (
    <Fragment>
      {isLoading ? (
        <div className="homePage">
          <Navigation />
          <LoadingHomePage />
        </div>
      ) : (
        <div className="homePage fade">
          <Navigation />
          <HeroSection />
          <ServiceSection />
          <TentangKamiSection />
        </div>
      )}
    </Fragment>
  );
}

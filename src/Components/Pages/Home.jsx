import React, { Fragment, useState } from "react";
import CommentSection from "../templates/Home Page/CommentSection";
import HeroSection from "../templates/Home Page/HeroSection";
import ServiceSection from "../templates/Home Page/ServiceSection";
import TentangKamiSection from "../templates/Home Page/TentangKamiSection";
import LoadingHomePage from "../templates/Loading/LoadingHomePage";
import Footer from "../UI/organisms/Footer/Footer";
import Navigation from "../UI/organisms/Nav/Navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1800);
  return (
    <Fragment>
      {isLoading ? (
        <div className="lg:pt-0 md:pt-[3.5rem] pt-[4.25rem]">
          <Navigation />
          <LoadingHomePage />
        </div>
      ) : (
        <div className="lg:pt-0 md:pt-[3.5rem] pt-[4.25rem]">
          <Navigation />
          <HeroSection />
          <ServiceSection />
          <TentangKamiSection />
          <CommentSection />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

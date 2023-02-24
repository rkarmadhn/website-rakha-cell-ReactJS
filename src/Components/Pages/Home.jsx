import React, { Fragment, useState } from "react";
import CommentSection from "../templates/Home Page/CommentSection";
import HeroSection from "../templates/Home Page/HeroSection";
import ServiceSection from "../templates/Home Page/ServiceSection";
import TentangKamiSection from "../templates/Home Page/TentangKamiSection";
import LoadingHomePage from "../templates/Loading/LoadingHomePage";
import Navigation from "../UI/organisms/Nav/Navigation";
import Footer from "../UI/molecules/Footer/Footer";
import FormReviewSection from "../templates/Home Page/FormReviewSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1800);
  return (
    <Fragment>
      {isLoading ? (
        <div className="pt-[4.25rem] lg:pt-0">
          <Navigation />
          <LoadingHomePage />
        </div>
      ) : (
        <div className="pt-[3.75rem] lg:pt-0">
          <Navigation />
          <HeroSection />
          <ServiceSection />
          <TentangKamiSection />
          <CommentSection />
          <FormReviewSection />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

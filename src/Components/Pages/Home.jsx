import React from "react";
import HeroSection from "../templates/Home Page/HeroSection";
import ServiceSection from "../templates/Home Page/ServiceSection";
import TentangKamiSection from "../templates/Home Page/TentangKamiSection";
import Navigation from '../UI/organisms/Nav/Navigation'

export default function Home() {
  return (
    <div className="homePage" id="Page">
      <Navigation />
      <HeroSection />
      <ServiceSection />
      <TentangKamiSection />
    </div>
  );
}

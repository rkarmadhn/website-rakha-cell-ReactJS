import React from "react";
import CardSection from "../templates/Service Andoriod Samsung/CardSection";
import Containers from "../UI/Atoms/Containers/Containers";
import Filter from "../UI/organisms/Filter/Filter";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/NavService/NavService";

export default function ServiceAndroidSamsung() {
  return (
    <div className="py-[7rem] md:pt-[8.5rem]">
      <Navigation />
      <NavService />
      <Containers className="px-2 md:flex">
        <Filter links="/service/android/samsung/filter/2016" />
        <CardSection />
      </Containers>
    </div>
  );
}

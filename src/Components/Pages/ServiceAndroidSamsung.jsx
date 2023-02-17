import React from "react";
import CardSection from "../templates/Service Andoriod Samsung/CardSection";
import Containers from "../UI/Atoms/Containers/Containers";
import Filter from "../UI/organisms/Filter/Filter";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/NavService/NavService";

export default function ServiceAndroidSamsung() {
  return (
    <div id="Page">
      <Navigation />
      <NavService />
      <Containers className="py-[4rem] px-2 md:flex">
        <Filter links="/service/android/samsung/filter/2016" />
        <CardSection />
      </Containers>
    </div>
  );
}

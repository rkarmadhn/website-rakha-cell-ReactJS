import React from "react";
import CardSection from "../templates/Service Andoriod Samsung/CardSection";
import FilterPageSamsung from "../templates/Service Andoriod Samsung/FilterPageSamsung";
import Containers from "../UI/Atoms/Containers/Containers";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/NavService/NavService";

export default function ServiceAndroidSamsung(props) {
  return (
    <div className="pt-[7.5rem] pb-8 md:pt-[8.5rem]">
      <Navigation />
      <NavService />
      <Containers className="px-2 md:flex">
        <FilterPageSamsung />
        <CardSection years={props.years}/>
      </Containers>
    </div>
  );
}

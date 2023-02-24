import React from "react";
import CardSection from "../templates/Services/Service Android Xiaomi/CardSection";
import FilterPageXiaomi from "../templates/Services/Service Android Xiaomi/FilterPageXiaomi";

import Containers from "../UI/Atoms/Containers/Containers";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/Nav/NavService/NavService";

export default function ServiceAndroidSamsung(props) {
  return (
    <div className="pt-[7.5rem] pb-8 md:pt-[6.5rem]">
      <Navigation />
      <NavService />
      <Containers className="px-2 md:flex">
        <FilterPageXiaomi />
        <CardSection years={props.years} />
      </Containers>
    </div>
  );
}

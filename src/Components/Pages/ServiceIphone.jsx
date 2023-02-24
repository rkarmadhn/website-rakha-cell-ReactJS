import React from "react";
import CardSectionIphone from "../templates/Services/Service Iphone/CardSectionIphone";
import FilterPageIphone from "../templates/Services/Service Iphone/FilterPageIphone";

import Containers from "../UI/Atoms/Containers/Containers";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/Nav/NavService/NavService";

export default function ServiceIphone(props) {
  return (
    <div className="pt-[7.5rem] pb-8 md:pt-[6.5rem]">
      <Navigation />
      <NavService />
      <Containers className="px-2 md:flex">
        <FilterPageIphone />
        <CardSectionIphone years={props.years}/>
      </Containers>
    </div>
  );
}

import React from "react";
import CardSectionOppo from "../templates/Service Android Oppo/CardSectionOppo";
import FilterPageOppo from "../templates/Service Android Oppo/FilterPageOppo";
import Containers from "../UI/Atoms/Containers/Containers";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/NavService/NavService";

export default function ServiceOppo(props) {
  return (
    <div className="pt-[7.5rem] pb-8 md:pt-[6.5rem]">
      <Navigation />
      <NavService />
      <Containers className="px-2 md:flex">
        <FilterPageOppo />
        <CardSectionOppo years={props.years}/>
      </Containers>
    </div>
  );
}

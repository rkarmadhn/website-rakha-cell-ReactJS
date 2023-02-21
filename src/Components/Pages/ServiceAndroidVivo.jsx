import React from "react";
import CardSection from "../templates/Service Android Vivo/CardSection";
import FilterPageVivo from "../templates/Service Android Vivo/FilterPageVivo";
import Containers from "../UI/Atoms/Containers/Containers";
import Navigation from "../UI/organisms/Nav/Navigation";
import NavService from "../UI/organisms/NavService/NavService";

export default function ServiceAndroidVivo(props) {
  return (
    <div className="pt-[7.5rem] pb-8 md:pt-[6.5rem]">
      <Navigation />
      <NavService />
      <Containers className="px-2 md:flex">
        <FilterPageVivo />
        <CardSection years={props.years}/>
      </Containers>
    </div>
  );
}

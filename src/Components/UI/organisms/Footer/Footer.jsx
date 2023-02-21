import { IconBrandFacebook, IconBrandInstagram, IconMapPin, IconPhone } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Containers from "../../Atoms/Containers/Containers";
import PlaceContentCenter from "../../Atoms/PlaceContentCenter/PlaceContentCenter";
import "./Footer.css";

export default function Footer() {
  return (
    <Containers className="bg-stone-600 text-white grid place-content-center py-4 mt-1 text-center">
      <p>&copy; Copyright 2023</p>
    </Containers>
  );
}

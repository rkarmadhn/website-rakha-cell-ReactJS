import { IconBrandFacebook, IconBrandInstagram, IconMapPin, IconPhone } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Containers from "../../Atoms/Containers/Containers";
import PlaceContentCenter from "../../Atoms/PlaceContentCenter/PlaceContentCenter";
import "./Footer.css";

export default function Footer() {
  return (
    <Containers className="bg-black grid place-content-center gap-y-2 py-4 mt-2 text-center">
      <h2 className="text-xl font-bold">Service</h2>
      <PlaceContentCenter className="gap-2 md:gap-4">
        <Link to="/service/iphone" relative="path">
          Iphone
        </Link>
        <Link to="/service/android/samsung" relative="path">
          Samsung
        </Link>
        <Link to="/service/android/oppo" relative="path">
          Oppo
        </Link>
        <Link to="/service/android/vivo" relative="path">
          Vivo
        </Link>
        <Link to="/" relative="path">
          Realme
        </Link>
        <Link to="/" relative="path">
          Pocophone
        </Link>
        <Link to="/service/android/xiaomi" relative="path">
          Xiaomi
        </Link>
      </PlaceContentCenter>
      <div className="flex justify-center items-center gap-x-2">
        <IconMapPin className="w-5 h-5 maps" />
        <IconBrandFacebook className="w-5 h-5 facebook" />
        <IconBrandInstagram className="w-5 h-5 instagram" />
        <IconPhone className="w-5 h-5 phone" />
      </div>
    </Containers>
  );
}

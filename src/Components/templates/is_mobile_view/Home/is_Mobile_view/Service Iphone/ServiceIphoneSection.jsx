import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HomeCard from "../../../../../UI/Atoms/is_mobile_view/HomeCard/HomeCard";
import MoreCard from "../../../../../UI/Atoms/is_mobile_view/MoreCard/MoreCard";
import { db } from "../../../../../config/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function ServiceIphoneSection() {
  const HomeCardSettings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "32px",
    speed: 500,
  };

  const [data, setData] = useState([]);

  const dataCollection = collection(db, "iphone");

  useEffect(() => {
    const getData = async () => {
      const datas = await getDocs(dataCollection)
      setData(datas.docs.map((dc) => ({ ...dc.data(), id: dc.id })))
    };
    getData();
  }, []);

  return (
    <div className="py-2">
      <h5 className="text-xl font-semibold italic text-center m-4" style={{ color: "#404258" }}>
        Price Service Iphone
      </h5>
      <Slider {...HomeCardSettings}>
        {data.map((dt, index) => {
          return (
            <div className="px-2" key={index}>
              <HomeCard type={dt.type}/>
            </div>
          );
        })}
        <MoreCard />
      </Slider>
    </div>
  );
}

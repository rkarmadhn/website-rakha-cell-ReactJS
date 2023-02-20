import React, { Fragment, useEffect, useState } from "react";
import Cards from "../../UI/organisms/Card/Cards";
import JSON from "../../config/json-page/iPhone-type.json";
import LoadCard from "../../UI/organisms/Card/Loader/LoadCard";

export default function CardSection(props) {
  const data = JSON.iphone;
  const map = data.filter((e) => e.tahun == props.years);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1800);

  return (
    <div className="w-full md:border-l md:border-stone-300 md:px-4">
      <h5 className="text-xl pb-3 fade">Menampilkan {isLoading ? "" : props.years < 2023 ? map.length : data.length} Item</h5>
      {isLoading ? (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
          <LoadCard />
          <LoadCard />
          <LoadCard />
          <LoadCard />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
          {data.map((el, index) => {
            if (el.tahun == props.years) {
              return <Cards brand={JSON.nama_brand} src={el.images} tahun={el.tahun} seri={el.nama_seri} harga_lcd={el.harga_lcd === "" ? "Belum Tersedia" : el.harga_lcd} key={index} />;
            } else if (!props.years) {
              return <Cards brand={JSON.nama_brand} src={el.images} tahun={el.tahun} seri={el.nama_seri} harga_lcd={el.harga_lcd === "" ? "Belum Tersedia" : el.harga_lcd} key={index} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

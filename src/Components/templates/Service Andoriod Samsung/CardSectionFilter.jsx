import React, { Fragment } from "react";
import Cards from "../../UI/organisms/Card/Cards";
import JSON from "../../config/json-page/android-type-samsung.json";

export default function CardSection(props) {
  const data = JSON.samsung;

  

  return (
    <div className="w-full border-l border-stone-200 px-4">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {data.map((el, index) => {
          if (el.tahun == props.years) {
            return <Cards brand={JSON.nama_brand} src={el.images} tahun={el.tahun} seri={el.nama_seri} harga_lcd={el.harga_lcd === "" ? "Belum Tersedia" : el.harga_lcd} key={index} />;
          }
        })}
      </div>
    </div>
  );
}

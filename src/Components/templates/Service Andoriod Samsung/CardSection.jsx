import React, { Fragment, useState } from "react";
import Cards from "../../UI/organisms/Card/Cards";
import LoadCard from "../../UI/organisms/Card/Loader/LoadCard";
import JSON from "../../config/json-page/android-type-samsung.json";

export default function CardSection() {
  const data = JSON.samsung;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1800);

  return (
    <div className="w-full md:border-l md:border-stone-200 md:px-4">
      <h5 className="text-xl pb-3">Menampilkan {data.length} Item</h5>
      {isLoading ? (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <LoadCard />
          <LoadCard />
          <LoadCard />
          <LoadCard />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4">
          {data.map((el, index) => {
            return <Cards brand={JSON.nama_brand} src={el.images} tahun={el.tahun} seri={el.nama_seri} harga_lcd={el.harga_lcd === "" ? "Belum Tersedia" : el.harga_lcd} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

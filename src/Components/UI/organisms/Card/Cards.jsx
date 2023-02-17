import React from "react";
import "./Card.css";
import PlatCard from '../../Atoms/PlatCard/PlatCard'

export default function Cards(props) {
  return (
    <div {...props} className="border-2 border-stone-200 rounded-xl shadow-xl p-3">
      <div className="py-2">
        <img src={props.src} alt="" className="w-full md:min-h-[185px] md:max-h-[185px] min-h-[155px] max-h-[155px]" />
      </div>
      <div className="py-2">
        <div className="flex justify-between">
          <p className={props.brand}>{props.brand}</p>
          <p>{props.tahun}</p>
        </div>
        <div className="flex justify-between border-b border-stone-200 py-2">
          <h5 className="text-lg md:text-xl font-bold truncate">{props.seri}</h5>
        </div>
        <PlatCard>
          <p>Harga LCD</p>
          <p>{props.harga_lcd}</p>
        </PlatCard>
      </div>
    </div>
  );
}

import React from "react";
import PlatCard from "../../Atoms/PlatCard/PlatCard";
import "./LoadCard.css";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card-load rounded-xl shadow-md p-3">
        <div className="py-2">
          <img className="w-full md:min-h-[185px] md:max-h-[185px] min-h-[155px] max-h-[155px]" />
        </div>
        <div className="py-2">
          <div className="flex justify-between">
            <p>......</p>
            <p>......</p>
          </div>
          <div className="flex justify-between border-b border-stone-200 py-2">
            <h5 className="text-lg md:text-xl font-bold truncate">......</h5>
          </div>
          <PlatCard>
            <p>......</p>
            <p>......</p>
          </PlatCard>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./LoadingHome.css";

export default function LoadingHomePage() {
  return (
    <div>
      <div className="card">
        <div className="card_load"></div>
        <div className="w-screen z-50 flex justify-center gap-4 card-bar-load">
          <div className="card_load_extreme_title"></div>
          <div className="card_load_extreme_title"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="card_load_2nd"></div>
      </div>
    </div>
  );
}

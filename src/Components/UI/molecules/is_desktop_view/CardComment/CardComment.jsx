import React from "react";
import "./CardComment.scss";

export default function CardComment() {
  return (
    <div className="card-comment bg-neutral-300 shadow shadow-neutral-300 m-1">
      <p className="text-2xl italic text-center">Rakha Putra</p>
      <p className="card-body-text">
      {/* 150 huruf */}
      itaconsectetur quibusdam animi molestiae lores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quibusdam animi molestiae lores? L
      </p>
      <p className="text-center">30 Januari 2023</p>
    </div>
  );
}

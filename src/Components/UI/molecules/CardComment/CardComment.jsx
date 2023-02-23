import React from "react";
import "./CardComment.css";

export default function CardComment() {
  return (
    <div className="card-comment bg-neutral-300 shadow-lg shadow-stone-100">
      <div className="card-images">
        <img src="https://divedigital.id/wp-content/uploads/2021/10/1-min.png" alt="" />
      </div>
      <div className="card-body">
        <p className="text-2xl italic text-center">Rakha Putra</p>
        <p className="card-body-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet nihil porro aspernatur amet. Maiores odio necessitatibus obcaecati dolorem veritatis minus perspiciatis recusandae quia totam, rerum consequatur nostrum. Iure,
          dignissimos.
        </p>
        <p className="text-center">30 Januari 2023</p>
      </div>
    </div>
  );
}

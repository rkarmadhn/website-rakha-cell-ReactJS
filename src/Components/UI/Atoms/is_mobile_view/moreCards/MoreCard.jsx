import React from "react";
import { Link } from "react-router-dom";

export default function MoreCard() {
  return (
    <div className="p-2">
      <div className="bg-stone-200 w-full h-[185px] grid place-content-center">
        <Link to="/" className="bg-stone-400 text-stone-200 py-2 px-4 rounded-md shadow-md">
          More +
        </Link>
      </div>
    </div>
  );
}

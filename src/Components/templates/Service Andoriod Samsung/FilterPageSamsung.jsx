import React from "react";
import { Link } from "react-router-dom";
import Filter from "../../UI/organisms/Filter/Filter";

export default function FilterPageSamsung() {
  return (
    <Filter>
      <Link to="/service/android/samsung/sort/years/2022" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2022</Link>
      <Link to="/service/android/samsung/sort/years/2021" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2021</Link>
      <Link to="/service/android/samsung/sort/years/2020" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2020</Link>
      <Link to="/service/android/samsung/sort/years/2019" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2019</Link>
      <Link to="/service/android/samsung/sort/years/2018" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2018</Link>
      <Link to="/service/android/samsung/sort/years/2017" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2017</Link>
      <Link to="/service/android/samsung/sort/years/2016" className="block hover:bg-stone-200 py-2 border-b border-stone-200">2016</Link>
    </Filter>
  );
}

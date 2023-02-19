import { IconAdjustmentsHorizontal, IconCircleChevronsDown, IconCircleChevronsUp, IconX } from "@tabler/icons-react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

export default function Filter(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  function handleFilter() {
    setIsFilter(!isFilter);
  }
  return (
    <Fragment>
      <div className={`w-full sort-filter md:hidden ${isFilter ? "no_show" : "show"}`}>
        <div className="flex items-center gap-x-2 text-md" onClick={handleFilter}>
          <p>Sort</p>
          <IconAdjustmentsHorizontal/>
        </div>
      </div>
      <div className={`side-menu text-stone-500 px-2 ${isFilter ? "show" : "no_show"}`}>
        <div className="label">
          <h1 className="w-full text-3xl  font-bold inline-flex justify-between items-center md:block">
            Filter
            <IconX className="w-8 h-8 md:hidden" onClick={handleFilter} />
          </h1>
        </div>
        <div className="wrapper-side-menu">
          <h5 className="w-full py-2 inline-flex justify-between items-center text-xl hover:cursor-pointer" onClick={handleOpen}>
            Tahun
            {isOpen ? <IconCircleChevronsUp className="w-8 h-8" /> : <IconCircleChevronsDown className="w-8 h-8" />}
          </h5>
          {isOpen ? (
            <div className="">
              <Link to={props.links2022} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2022
              </Link>
              <Link to={props.links2021} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2021
              </Link>
              <Link to={props.links2020} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2020
              </Link>
              <Link to={props.links2019} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2019
              </Link>
              <Link to={props.links2018} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2018
              </Link>
              <Link to={props.links2017} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2017
              </Link>
              <Link to={props.links2016} className="block hover:bg-stone-200 py-2 border-b border-stone-200">
                2016
              </Link>
              <Link className="py-2 text-red-600">{props.reset}</Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="py-2">
          <p className="">*) Untuk harga sudah termasuk jasa pasang , Sewaktu waktu harga akan berubah, Untuk stock bisa ditanyakan melalui Whatsapp kami atau tekan Contact pada Navigasi kami</p>
        </div>
      </div>
    </Fragment>
  );
}

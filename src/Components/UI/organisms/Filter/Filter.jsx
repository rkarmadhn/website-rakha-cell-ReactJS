import { IconAdjustmentsHorizontal, IconCircleChevronsDown, IconCircleChevronsUp, IconX } from "@tabler/icons-react";
import React, { Fragment, useState } from "react";
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
      <div className={`side-menu text-neutral-600 p-4 md:p-0 md:pr-2 ${isFilter ? "show" : "no_show"}`}>
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
            <div className="" onClick={handleFilter}>
              {props.children}
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

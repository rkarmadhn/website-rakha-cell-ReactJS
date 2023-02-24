import React from "react";
import "./FormComment.scss";

export default function FormComment() {
  return (
    <div className="flex justify-center items-center">
      <div className="md:grid md:gap-2 p-6 rounded-lg bg-neutral-300 min-h-[379px] max-h-[379px]">
        <h4 className="text-xl text-center">Review</h4>
        <div className="input-box">
          <input placeholder="Masukan nama anda" className="input" name="name" type="text"/>
        </div>
        <div className="input-box">
          <textarea name="body" id="body" cols="30" rows="4" placeholder="Masukan Kritik dan Saran" className="input"></textarea>
        </div>
        <button className="btn-cssbuttons">
          <span className="tracking-widest">Kirim</span>
        </button>
        <p className="my-3 text-md text-neutral-500">Alamat: Jl. Masjid Nurul Ihsan, <br className="md:hidden"/> Jatiwaringin, <br className="md:block hidden"/> Pondok Gede, Kota Bekasi</p>
      </div>
    </div>
  );
}

import React from "react";
import "./FormComment.css";

export default function FormComment() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-2 p-6 rounded-lg bg-neutral-300 min-h-[379px] max-h-[379px]">
        <h4 className="text-xl text-center">Review</h4>
        <div className="input-box">
          <input placeholder="Masukan nama anda" className="input" name="name" type="text"/>
          <span className="input-helper">Masukan nama yang benar</span>
        </div>
        <div className="input-box">
          <textarea name="body" id="body" cols="30" rows="5" placeholder="Masukan Kritik dan Saran" className="input hidden md:block"></textarea>
          <textarea name="body" id="body" cols="30" rows="2" placeholder="Masukan Kritik dan Saran" className="input md:hidden"></textarea>
          <span className="input-helper">Kritik & Saran</span>
        </div>
        <button className="btn-cssbuttons">
          <span className="tracking-widest">Kirim</span>
        </button>
      </div>
    </div>
  );
}

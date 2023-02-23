import { IconMessageForward } from "@tabler/icons-react";
import React from "react";
import "./FormComment.css";
import IconListComment from '../../Atoms/IconListComment'

export default function FormComment() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-2 p-6 rounded-lg bg-neutral-300">
        <h4 className="text-xl text-center">Review</h4>
        <div className="input-box">
          <input placeholder="Masukan nama anda" className="input" name="name" type="text" required />
          <span className="input-helper">Masukan nama yang benar</span>
        </div>
        <div className="input-box">
          <textarea name="body" id="body" cols="30" rows="10" placeholder="Masukan Kritik dan Saran" className="input"></textarea>
          <span className="input-helper">Kritik & Saran</span>
        </div>
        <button className="btn-cssbuttons">
          <span className="tracking-widest">Kirim</span>
          <IconListComment />
        </button>
      </div>
    </div>
  );
}

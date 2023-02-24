import { IconHeartPlus, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import FormComment from "../../UI/organisms/FormComment/FormComment";
import "./FormReviewSection.scss";

export default function FormReviewSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="form-review-section">
        <IconHeartPlus className={`icon-show ${isOpen ? 'no_showed' : 'showed'}`} onClick={() => setIsOpen(true)}/>
        <div className={`${isOpen ? 'showed' : 'no_showed'}`}>
          <IconX onClick={() => setIsOpen(false)}/>
          <FormComment />
        </div>
    </div>
  );
}

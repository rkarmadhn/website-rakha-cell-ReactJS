import { IconPlus } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import "./MoreCard.scss";

export default function MoreCard() {
  return (
    <div className={`is_card_more_banner`}>
      <div className="is_card_more_text">
        <Link to="">
          More <IconPlus />
        </Link>
      </div>
    </div>
  );
}

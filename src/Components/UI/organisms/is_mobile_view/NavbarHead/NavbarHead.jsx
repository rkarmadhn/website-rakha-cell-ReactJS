import { IconAlignCenter, IconBellRinging, IconUserCircle } from "@tabler/icons-react";
import React, { Component } from "react";

import "./NavbarHead.scss";

export default class NavbarHead extends Component {
  render() {
    return (
      <div className="navbar_head shadow shadow-stone-200">
        <div className="is_icons">
          <IconAlignCenter />
        </div>
        <div className="is_icons">
          <IconBellRinging />
          <IconUserCircle />
        </div>
      </div>
    );
  }
}

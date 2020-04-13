import React from "react";

import "./info-bar.styles.css";
import CloseIcon from "../../icons/closeIcon.png";
import OnlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room, seeUsersOnline }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <button id="onlineIcon" onClick={() => seeUsersOnline()}>
        <img src={OnlineIcon} alt="online icon" />
      </button>
      <h3>#{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={CloseIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;

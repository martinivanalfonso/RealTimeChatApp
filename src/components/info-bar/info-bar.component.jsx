import React from "react";
import { motion } from "framer-motion"

import "./info-bar.styles.css";
import CloseIcon from "../../icons/closeIcon.png";
import OnlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room, seeUsersOnline }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <motion.button whileHover={{ scale: 1.2}} className="onlineIcon" onClick={() => seeUsersOnline()}>
        <img src={OnlineIcon} alt="online icon" />
      </motion.button>
      <h3>#{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <motion.a  whileHover={{ scale: 1.2}}  href="/">
        <img src={CloseIcon} alt="close icon" />
      </motion.a>
    </div>
  </div>
);

export default InfoBar;

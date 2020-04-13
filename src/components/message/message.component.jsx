import React from "react";
import { motion } from "framer-motion";

import ReactEmoji from "react-emoji";
import "./message.styles.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const animationVariants = {
    initial: { rotate: 0, scale: 0 },
    final: { rotate: 0, scale: 1 },
  };

  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <motion.div
        initial="initial"
        animate="final"
        variants={animationVariants}
        className="messageBox backgroundBlue"
      >
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </motion.div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <motion.div
        initial="initial"
        animate="final"
        variants={animationVariants}
        className="messageBox backgroundLight"
      >
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </motion.div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;

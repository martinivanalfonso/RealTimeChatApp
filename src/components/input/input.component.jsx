import React from "react";

import "./input.styles.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form action="" className="form">
    <input
      type="text"
      placeholder="Type a message..."
      value={message}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      onChange={(e) => setMessage(e.target.value)}
    />

    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
);

export default Input;

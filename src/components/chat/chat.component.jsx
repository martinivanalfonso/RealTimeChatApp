import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import InfoBar from "../info-bar/info-bar.component";
import Input from "../input/input.component";
import Messages from "../messages/messages.component";

import "./chat.styles.css";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const history = useHistory();
  //const END_POINT = "https://chat-app-martinalfonso.herokuapp.com/";
  const END_POINT = "http://localhost:5000/";
  const animationVariants = {
    initial: { rotate: 0, scale: 0 },
    final: { rotate: 0, scale: 1 },
  };

  useEffect(() => {
    const { name, room } = queryString.parse(history.location.search);
    socket = io(END_POINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) history.push("/?error=nametaken");
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [history]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const seeUsersOnline = () => {
    socket.emit("seeUsersOnline", { name, room }, () => console.log("success"));
  };

  return (
    <div className="outerContainer">
      <motion.div
        initial="initial"
        animate="final"
        variants={animationVariants}
        className="container"
      >
        <InfoBar room={room} seeUsersOnline={seeUsersOnline} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </motion.div>
    </div>
  );
};

export default Chat;

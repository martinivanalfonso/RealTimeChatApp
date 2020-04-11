import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const END_POINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    console.log(name, room)
    socket = io(END_POINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {

    });

    return () => {
     
    };
  }, [END_POINT, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault()

      if (message) {
          socket.emit('sendMessage', message, () => setMessage(''))
      }
  }

  console.log(message, messages)

  return (
    <div className="outerContainer">
      <div className="container">
        <input
          value={message}
          onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Chat;

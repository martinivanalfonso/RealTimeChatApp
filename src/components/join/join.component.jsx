import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import queryString from "query-string";
import { motion } from "framer-motion";

import "./join.styles.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const animationVariants = {
    initial: { rotate: 0, scale: 0 },
    final: { rotate: 0, scale: 1 },
  };

  useEffect(() => {
    const { error } = queryString.parse(history.location.search);
    error === "nametaken"
      ? setError("Name taken, try a different one")
      : setError("");
  }, [history]);

  return (
    <div className="joinOuterContainer">
      <motion.div
        initial="initial"
        animate="final"
        variants={animationVariants}
        className="joinInnerContainer"
      >
        <h1 className="heading">Join</h1>
        <div>
          <input
            autoFocus
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter"
                ? history.push(`/chat?name=${name}&room=${room}`)
                : null
            }
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <motion.button whileHover={{ borderRadius: "50%" }} className="button mt-20" type="submit">
            Sign In
          </motion.button>
        </Link>
        {error && <p style={{ color: "white" }}>{error}</p>}
      </motion.div>
    </div>
  );
};

export default Join;

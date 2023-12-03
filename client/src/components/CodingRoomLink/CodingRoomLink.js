import React from "react";
import { Link } from "react-router-dom";
import "./codingRoomLink.css";
const CodeBlockLink = ({ _id, name }) => {
  return (
    <Link to={`../${_id}`}>
      <button key={_id} className="room-link">
        {name}
      </button>
    </Link>
  );
};

export default CodeBlockLink;

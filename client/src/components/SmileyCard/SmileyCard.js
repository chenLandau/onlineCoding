import React from "react";
import "./SmileyCard.css";
import { FaFaceSmile } from "react-icons/fa6";
const SmileyCard = () => {
  return (
    <div className="card-layout">
      <div className="smiley-container">
        <FaFaceSmile className="icon" />
      </div>
    </div>
  );
};

export default SmileyCard;

import React from "react";
import "./ImageCard.css";
import tennisImage from "../assets/fei-chao-IaRe1EGaMRc-unsplash.jpg";

const ImageCard = () => {
  return (
    <div
      className="image-card"
      style={{
        backgroundImage: `url(${tennisImage})`,
      }}
    >
      <span className="lesson-pill">
        Private & Group Lessons
      </span>
    </div>
  );
};

export default ImageCard;
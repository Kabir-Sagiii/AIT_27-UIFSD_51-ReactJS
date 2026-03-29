import React from "react";
import "./Card.css";
function Card({ image, title }) {
  return (
    <div id="card">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;

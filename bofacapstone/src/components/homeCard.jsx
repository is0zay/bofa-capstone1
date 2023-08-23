import React from "react";
import "./homeCard.css";

function Card({ title, imageUrl, body }) {
  return (
    <div className="homeCardContainer">
      <div className="cardImgContainer">
        <img src={imageUrl} alt=" " />
      </div>
      <div className="cardContent">
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="cardBody">
          <p>{body}</p>
        </div>
        <div className="cardBtn">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

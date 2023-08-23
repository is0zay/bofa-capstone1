import React from "react";
import "./homeDivider.css";

function BlueDivider({ title, imageUrl, body, info }) {
  return (
    <div className="homeDividerContainerBlue">
      <div className="homeDivder-img-container">
        <img src={imageUrl} alt=" " />
      </div>
      <div className="homeDivider-content">
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="homeDivider-body">
          <p>{body}</p>
        </div>
        <div className="horizontalBreak"></div>
        <div className="homeDivider-info">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default BlueDivider;

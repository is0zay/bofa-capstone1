import React from "react";
import "./homeDivider.css";

function Divider({ title, imageUrl, body, info }) {
  return (
    <div className="homeDividerContainer">
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
      {imageUrl && (
        <div className="homeDivder-img-container">
          <img src={imageUrl} alt="" />
        </div>
      )}
    </div>
  );
}

export default Divider;

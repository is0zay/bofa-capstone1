import React from "react";
import "./infoSection.css";

function InfoSection({ imgUrl, title, info }) {
  return (
    <div className="info-section">
      <div className="info-content">
        <h1 className="infoSectionTitle">{title}</h1>
        <p className="infoSectionText">{info}</p>
      </div>
      <div className="info-image">
        <img src={imgUrl} className="infoSectionImg" alt=" " />
      </div>
    </div>
  );
}

export default InfoSection;

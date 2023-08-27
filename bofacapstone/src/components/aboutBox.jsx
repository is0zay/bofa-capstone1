import React from "react";
import "./aboutBox.css";
function AboutBox({ img, title, info }) {
  return (
    <div>
      <section className="middle-section">
        <div className="middle-container">
          <img src={img} className="section-middle-image" alt=" " />
          <div className="middle-info">
            <h1 className="middle-title">{title}</h1>
            <p className="info">{info}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBox;

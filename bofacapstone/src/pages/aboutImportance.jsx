
import React from "react";
import "./aboutImportance.css";

const AboutImportance = () => {
  return (
    <div className="importance-section">
      <div className="importance-image">
        <img
          src="/about/aboutHealth.jpeg"
          alt="Depicts Health"
          className="importImg"
        />
      </div>
      <div className="importance-content">
        <div className="importance-text">
          <h2 className="importance-subtitle">Access to Healthcare</h2>
          <p className="importance-paragraph">
            Regular check-ups, preventive screenings, and timely medical
            interventions help in early detection and treatment of illnesses,
            reducing the risk of complications. Mental healthcare access reduces
            stigma and promotes awareness, encouraging individuals to seek help
            and support for their mental health concerns.
          </p>
          <ul className="importance-list">
            <li>
              Access to nutritious food is vital for maintaining proper physical
              and cognitive development.
            </li>
            <li>
              Timely diagnosis, counseling, therapy, and medication can help
              individuals effectively cope with mental health challenges and
              improve their overall well-being.
            </li>
           
          </ul>
        </div>

        <div className="importance-text">
          <h2 className="importance-subtitle">Access to Jobs</h2>
          <p className="importance-paragraph">
            Employment plays a crucial role in promoting economic mobility,
            which is why our focus is on creating pathways to employment through
            various workforce development initiatives. We support programs that
            offer education, upskilling, and reskilling opportunities to
            individuals, ensuring that they can advance in their careers.
          </p>
          <ul className="importance-list">
            <li>
              Access to jobs provides individuals with financial stability and
              the means to support themselves and their families.
            </li>
            <li>
              Employment opportunities contribute to economic growth and the
              overall prosperity of communities and nations.
            </li>
          
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default AboutImportance;

import React from "react";
import "./mainFooter.css";
const MainFooter = () => {
  return (
    <div className="footer-content">
      <footer>
        <div className="footer-box  first">
          <ul className="footer-Mainbox">
            {/* <li className="footer-list">Company</li> */}
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Learn More</a>
            </li>
          </ul>
        </div>
        <div className="vertical-line"></div>
        <ul className="footer-box">
          <li className="footer-list">Our Company</li>
          <li>
            <a href="#">Connecting with Others</a>
          </li>
          <li>
            <a href="#">How We Help</a>
          </li>
          <li>
            <a href="#">Goals</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>

        <ul className="footer-box">
          <li className="footer-list">Helping Our Community</li>
          <li>
            <a href="#">Local Impact</a>
          </li>
          <li>
            <a href="#">Helping Individuals</a>
          </li>
          <li>
            <a href="#">Helping Families</a>
          </li>
          <li>
            <a href="#">Health</a>
          </li>
          <li>{/* <a href="#">Jobs</a> */}</li>
        </ul>

        <ul className="footer-box">
          <li className="footer-list">Newsroom</li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Keep Up With Our Work</a>
          </li>
          <li>
            <a href="#">Grant Opportunities</a>
          </li>
          <li>
            <a href="#">Promote Change</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default MainFooter;

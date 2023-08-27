import React from "react";
import { Link } from "react-router-dom";
import "./utilityNav.css";
const UtilityNav = () => {
  return (
    <div className="utilityNav">
      <nav>
        <ul className="utilityNavContainer">
          <li className="utilityNavItem">
            <Link to="/">Admin</Link>
          </li>
          <li className="utilityNavItem">
            <Link to="/home/health">Health</Link>
          </li>
          <li className="utilityNavItem">
            <Link to="/home/jobs">Job Creation</Link>
          </li>
          <li className="utilityNavSideContainer">
            <ul className="utilitySideItems">
              <li className="utilityNavItem">Sign Up</li>
              <li className="utility-vertical-line"></li>
              <li className="utilityNavItem">Sign In</li>
            </ul>
          </li>
          <div className="utilityNavSpacer"></div>
        </ul>
      </nav>
    </div>
  );
};

export default UtilityNav;

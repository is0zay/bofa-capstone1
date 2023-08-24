import React from "react";
import { Link } from "react-router-dom";
import "./utilityNav.css";
const UtilityNav = () => {
  return (
    <div className="utilityNav">
      <nav>
        <ul className="utilityNavContainer">
          <li className="utilityNavItem">
            <Link to="/">Personal</Link>
          </li>
          <li className="utilityNavItem">
            <Link to="/">Health</Link>
          </li>
          <li className="utilityNavItem">
            <Link to="/">Job Creation</Link>
          </li>
          <li className="utilityNavItem">
            <Link to="/survey">Survey</Link>
          </li>
          <li className="utilityNavSideContainer">
            <ul className="utilitySideItems">
              <Link to="/signup" className="utilityNavItem">Sign Up</Link>
              <li className="utility-vertical-line"></li>
              <Link to="/login" className="utilityNavItem">Sign In</Link>
            </ul>
          </li>
          <div className="utilityNavSpacer"></div>
        </ul>
      </nav>
    </div>
  );
};

export default UtilityNav;

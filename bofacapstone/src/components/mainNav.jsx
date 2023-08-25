import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";

const MainNav = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navList">
          <li className="navLogo">
            <Link to="/">
              <img src="./nav/boaLogo.png" alt="website logo" />
            </Link>
          </li>
          <li className="navItem dropdown">
            <Link to="/" className="navLink">
              Home
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/home/news">News</Link>
              </li>
              <li>
                <Link to="/home/events">Events</Link>
              </li>
            </ul>
          </li>
          <li className="navItem dropdown">
            <Link to="/about" className="navLink">
              About
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about/history">History</Link>
              </li>
              <li>
                <Link to="/about/team">Team</Link>
              </li>
              <li>
                <Link to="/about/values">Values</Link>
              </li>
            </ul>
          </li>
          <li className="navItem dropdown">
            <Link to="/newsletter" className="navLink">
              Newsletter
            </Link>
            <ul className="dropdown-menu">
              <li>
                {/* <Link to="#latest">Latest</Link> */}
                <a href="/newsletter/#latest">Latest</a>
              </li>
              <li>
                {/* <Link to="#archives">Archives</Link> */}
                <a href="/newsletter/#articles">Archives</a>
              </li>
            </ul>
          </li>
          <li className="navItem dropdown">
            <Link to="/contact" className="navLink">
              Contact
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/contact/general">General</Link>
              </li>
              <li>
                <Link to="/contact/support">Support</Link>
              </li>
            </ul>
          </li>
          <li className="navItem dropdown">
            <Link to="/" className="navLink">
              Help
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/help/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/help/contact">Contact Support</Link>
              </li>
            </ul>
          </li>
          <li className="searchIcon">
            <img
              src="./nav/searchIcon.png"
              className="searchIcon"
              alt="search icon"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;

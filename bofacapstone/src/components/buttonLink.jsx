import React from "react";
import { Link } from "react-router-dom";
import "./buttonLink.css"
const Button = ({ to, text }) => {
  return <Link to={to} className="buttonLink"> {text} </Link>;
};

export default Button;

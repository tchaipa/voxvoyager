// import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import "./Destinations.css";
import MagicBento from "./component/MagicBento";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Destinations() {
  return (
    <div className="destinations-section">
      <h2>Destinations</h2>
      <span>Check out our latest calendar for the year 2026.</span>
      <MagicBento />
      <a href="packages" className="destination-link">
        Explore More Destinations <FaArrowRight />
      </a>
    </div>
  );
}

export default Destinations;

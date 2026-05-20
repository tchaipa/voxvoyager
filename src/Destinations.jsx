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
      <span>
        Explore the beuaty of Zimbabwe with different kind of destinations to
        choose from. Every destination has its own unique story to tell.
      </span>
      <MagicBento />
      <a href="destinations" className="destination-link">
        Explore More Destinations <FaArrowRight />
      </a>
    </div>
  );
}

export default Destinations;

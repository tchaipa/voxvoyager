// import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import "./Destinations.css";
import MagicBento from "./component/MagicBento";
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";

function Destinations() {
  return (
    <div className="destinations-section ">
      <h2 className="destinations-title">
        Uncover The Beauty of Your <br />
        Next Travel Destination
      </h2>
      <MagicBento />
      <a href="destinations" className="destination-link"> 
        Explore More Destinations <FaArrowRight/>
      </a>
      
    </div>
  );
}

export default Destinations;

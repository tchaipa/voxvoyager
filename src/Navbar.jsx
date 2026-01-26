import React from "react";
import "./Navbar.css";
import { Col, Container, Image, Row } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import logo from "./assets/vox_logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  return (
    <div className="navbar container-fluid sticky-top">
      <Image src={logo} href="" className="nav-logo" />

      <a className="nav-a" href="">
        Home
      </a>
      <a className="nav-a" href="">
        About
      </a>
      <a className="nav-a" href="">
        Destinations
      </a>
      <a className="nav-a" href="">
        FAQ
      </a>
      <a className="nav-a" href="">
        Contact
      </a>
    </div>
  );
}

export default Navbar;

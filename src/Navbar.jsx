import React from "react";
import "./Navbar.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import logo from "./assets/vox_logo.png";

function Navbar() {
  return (
    <div className="navbar container-fluid sticky-top">
      <Container className="nav-container">
        <Row>
          <Col className="button-col"></Col>
          <Col>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Destination</a>
            <a href="">FAQ</a>
            <a href="">Contact</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;

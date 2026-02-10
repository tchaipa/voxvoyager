// import { Grid } from "@mui/material";
//
// import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "./assets/vox_logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function Navbarr() {
  return (
    <div className="navbar ">
      {/* <Row className="nav-row ">
        <Col className="nav-col">
        </Col>
        <Col className="nav-col">
          <div className="nav-links container">
            <a className="nav-a" href="">
              Home
            </a>

            <a className="nav-a" href="">
              Destinations
            </a>

            <a className="nav-a" href="">
              Packages
            </a>

            <a className="nav-a" href="">
              Contact
            </a>
          </div>
        </Col>
      </Row> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-container bg-body-tertiary container-fluid"
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="nav-logo d-inline-block "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <NavDropdown title="Destinations" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarr;

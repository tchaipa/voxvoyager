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
    <div className="navbar">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-container bg-body-tertiary"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="nav-logo d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="packages">Packages</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>
            <Nav.Link href="contact-us">Contact Us</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarr;


{/* <NavDropdown
              title="Destinations"
              id="collapsible-nav-dropdown"
              className="nav-drop"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

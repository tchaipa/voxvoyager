import "./Navbar.css";
import { Col, Container, Image, Row } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import logo from "./assets/vox_logo.png";

function Navbar() {
  return (
    <div className="navbar container-fluid sticky-top">
      <Image src={logo} href="" className="nav-logo" />
      <div className="nav-links container-fluid">
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
    </div>
  );
}

export default Navbar;

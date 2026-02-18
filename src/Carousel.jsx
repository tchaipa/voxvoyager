import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { Card } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
// import one from "./assets/vicfalls.jpg";
// import two from "./assets/10.jpeg";
// import three from "./assets/3.jpeg";

function Carousell() {
  return (
    <Carousel
      data-bs-theme="dark"
      className="carousel-container container-fluid"
    >
      <Carousel.Item className="carousel-item">
        <Card className="carousel-card container-fluid">
          <Row className="carousel-row ">
            <Col className="carousel-col">1</Col>
            <Col className="carousel-col-2">2</Col>
          </Row>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;

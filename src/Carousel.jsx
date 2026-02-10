import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import one from "./assets/vicfalls.jpg";
import two from "./assets/10.jpeg";
import three from "./assets/3.jpeg";

function Carousell() {
  return (
    <Carousel
      data-bs-theme="dark"
      className="carousel-container container-fluid"
    >
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src={two}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src={three}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;

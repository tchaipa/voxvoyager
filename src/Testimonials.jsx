import { Grid } from "@mui/material";
// import Carousell from "./Carousel";
import "./Testimonials.css";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import test1 from "./assets/20.jpeg";
import test2  from "./assets/21.jpeg";
import test3  from "./assets/22.jpeg";


function Testimonials() {
  return (
    <div className="testimonials-section container-fluid">
      <h2>Testimonials</h2>
      <p className="testimonials-p">
        Here is what our customers had to say about us
      </p>
      <div className="testimonials-container container-fluid">
        <Row className="testimonials-row">
          <Col>
          <Card className="testimonials-card">
          <p>
              " Voxvoyager simply are the best. Definitely using their services all the time
              when i visit. I really enjoyed my stay in Zimbabwe"
            </p>
          <Image className="test-image" src={test1} />
            <h5>~Jane Doe~</h5>
            <div>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
          </div>
          </Card>
           
          </Col>
          <Col>
          <Card className="testimonials-card">
          <p>
              " We really had a great time in Vumba all thanks to the wonderfull
              team at VoxVoyager who made our journey a memorable one."
            </p>
          <Image className="test-image" src={test2} />
            <h5>~John Doe~</h5>
            <div>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
          </div>
           
          </Card>
            
          </Col>
          <Col>
          <Card className="testimonials-card"> 
          <p>
              " We really had a great time in Vumba all thanks to the wonderfull
              team at VoxVoyager who made our journey a memorable one."
            </p>
            <Image className="test-image" src={test3} />
            <h5>~James Doe~</h5> <div>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
          </div>
            </Card>
           
          </Col>
        </Row>
        <div className="test-button">
        <Button className="testimonials-button" href="testimonies">Read More</Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

import { Chip, Grid } from "@mui/material";
import "./AboutUs.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import packages from "./assets/wall.jpg";

function AboutUs() {
  return (
    <div className="aboutus-section">
      <Grid className="aboutus-grid">
        <Row className="aboutus-row">
          <Col className="aboutus-col">
            <Image src={packages} alt="" className="aboutus-image" />
          </Col>
          <Col className="aboutus-col">
            <h2 className="aboutus-title">About Us</h2>
            <p>
              We offer a curated selection of tour packages, catering various
              travel styles, themes and durations. These packages are designed
              to help you discover the destinations in Zimbabwe in an
              unforgettable way, whether you are looking for a relaxing beach
              vacation, an adrenaline-pumping adventure, or a cultural immersion
              experience.
            </p>
            <div className="aboutus-chips">
              <Chip className="aboutus-chip-1 " label="CAMPING" />
              <Chip className="aboutus-chip-2" label="HIKING" />
              <Chip className="aboutus-chip-3" label="FAMILY VACATION" />
              <Chip className="aboutus-chip-4" label="CANOEING" />
            </div>
            <br />
            <div className="aboutus-chips ">
              <Chip className="aboutus-chip-4" label="CANOEING" />
              <Chip className="aboutus-chip-3" label="FAMILY VACATION" />
              <Chip className="aboutus-chip-2" label="HIKING" />
              <Chip className="aboutus-chip-1 " label="CAMPING" />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default AboutUs;

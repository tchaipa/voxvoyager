import { Box, Card, Chip, Divider, Grid } from "@mui/material";
import "./Packages.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import packages from "./assets/sky.jpg";

function Packages() {
  return (
    <div className="packages-section ">
      <h2 className="packages-title">What We Offer</h2>
      <p>
        Our packages are designed to meet the needs of every traveler, from solo
        adventures to family trips.
      </p>
      <div className="packages-container">
        <Grid>
          <Row className="packages-row">
            <Col>
              <h3>Curated Tour Packages</h3>
              <p>
                We offer a curated selection of tour packages, catering various
                travel styles, themes and durations. These packages are designed
                to help you discover the destinations in Zimbabwe in an
                unforgettable way, whether you are looking for a relaxing beach
                vacation, an adrenaline-pumping adventure, or a cultural
                immersion experience.
              </p>
              <div className="packages-chips ">
                <Chip className="packages-chip-1 " label="CAMPING" />
                <Chip className="packages-chip-2" label="HIKING" />
                <Chip className="packages-chip-3" label="FAMILY VACATION" />
                <Chip className="packages-chip-4" label="CANOEING" />
              </div>
              <br />
              <div className="packages-chips ">
                <Chip className="packages-chip-4" label="CANOEING" />
                <Chip className="packages-chip-3" label="FAMILY VACATION" />
                <Chip className="packages-chip-2" label="HIKING" />
                <Chip className="packages-chip-1 " label="CAMPING" />
              </div>
            </Col>
            <Col>
              <Image
                src={packages}
                alt="Package Image"
                className="packages-image"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Packages;

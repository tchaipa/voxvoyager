import { Box, Card, Chip, Divider, Grid } from "@mui/material";
import "./Packages.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import pic from "./assets/sky.jpg";
import picc from "./assets/services.jpg"

function Packages() {
  return (
    <div className="packages-section container-fluid">
      <h2 className="packages-title">What We Offer</h2>
      <p>
        Our packages are designed to meet the needs of every traveler, from solo
        adventures to family trips.
      </p>
      <Container className="packages-container">
        <Row className="packages-row">
          <Col className="packages-col">
          <h3>Curated Tour Packages</h3>
            <p>
              We offer a curated selection of tour packages, catering various
              travel styles, themes and durations.
              These packages are designed to help you discover the destinations
              in Zimbabwe in an unforgettable way, whether you are looking for a
              relaxing beach vacation, an adrenaline-pumping adventure, or a
              cultural immersion experience.
            </p>
            <div className="packages-chips container-fluid">
              
              <Chip className="packages-chip-1 container-fluid" label="CAMPING"/>
            <Chip className="packages-chip-2 container-fluid" label="HIKING"/>
            <Chip className="packages-chip-3 container-fluid" label="FAMILY VACATION"/>
            <Chip className="packages-chip-4 container-fluid" label="CANOEING"/>
             
             
                        
            </div>
                    
          </Col>
          <Col className="packages-col-pics">
          <Image className="packages-image-1" src={picc}></Image>
          <Image className="packages-image-2" src={pic}></Image>

          </Col>
        </Row>
      </Container>
{/*       
      <Box className="packages-box container-fluid">
        <Grid
          className="packages-grid container-fluid"
          size={4}
          container
          spacing={2}
        >
          <div className="packages-content-one container-fluid">
            <h3>Curated Tour Packages</h3>
            <p>
              We offer a curated selection of tour packages, catering various
              travel styles, themes and durations. <br />
              <br />
              These packages are designed to help you discover the destinations
              in Zimbabwe in an unforgettable way, whether you are looking for a
              relaxing beach vacation, an adrenaline-pumping adventure, or a
              cultural immersion experience.
            </p>
          
          </div>
        </Grid>
        <Grid
          className="packages-grid container-fluid"
          size={4}
          container
          spacing={2}
        >
          <div className="packages-content container-fluid">
            <span>
              We offer a curated selection of tour packages, catering various
              travel styles, themes and durations. <br />
              <br />
              These packages are designed to help you discover the destinations
              in Zimbabwe in an unforgettable way, whether you are looking for a
              relaxing beach vacation, an adrenaline-pumping adventure, or a
              cultural immersion experience.
            </span>
            <Image className="packages-image" src={sky}></Image>
          </div>
        </Grid>
      </Box> */}
    </div>
  );
}

export default Packages;

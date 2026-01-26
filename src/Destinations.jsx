import React from "react";
import "./Destinations.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Box, Grid } from "@mui/material";
import vicfalls from "./assets/vicfalls.jpg";
import chinhoi from "./assets/chinhoyi.jpg";

function Destinations() {
  return (
    <div className="destinations-section container-fluid">
      <h2 className="destinations-title">
        Uncover The Beauty of Your <br />
        Next Travel Destination
      </h2>
      <Box className="destination-box container-fluid">
        <Grid
          className="destination-grid container-fluid"
          size={4}
          container
          spacing={2}
        >
          <Row>
            <Col>
              <Image className="destination-image" src={vicfalls}></Image>
            </Col>
            <Col>
              <Image className="destination-image" src={chinhoi}></Image>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image className="destination-image" src={vicfalls}></Image>
            </Col>
            <Col>
              <Image className="destination-image" src={vicfalls}></Image>
            </Col>
          </Row>
        </Grid>
        <Grid
          className="destination-grid container-fluid"
          size={8}
          container
          spacing={2}
        >
          <Image className="destination-images" src={vicfalls}></Image>
        </Grid>
      </Box>
    </div>
  );
}

export default Destinations;

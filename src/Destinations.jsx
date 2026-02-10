// import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./Destinations.css";
import { Grid } from "@mui/material";
import vicfalls from "./assets/5.jpeg";
import chinhoi from "./assets/19.jpeg";
import great from "./assets/14.jpeg";
import heroes from "./assets/12.jpeg";
import mana from "./assets/4.jpeg";

function Destinations() {
  return (
    <div className="destinations-section ">
      <h2 className="destinations-title">
        Uncover The Beauty of Your <br />
        Next Travel Destination
      </h2>
      <div className="destination-grids ">
        <Grid>
          <Row className="row">
            <Col className="destination-col">
              <Image className="destination-images" src={vicfalls}></Image>
              <h5>Victoria Falls</h5>
            </Col>
            <Col className="destination-col">
              <Image className="destination-images" src={chinhoi}></Image>
              <h5>Matopo Hills</h5>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col">
              <Image className="destination-images" src={great}></Image>
              <h5>Great Zimbabwe Ruins</h5>
            </Col>
            <Col className="destination-col">
              <Image className="destination-images" src={mana}></Image>
              <h5>Mana Pools</h5>
            </Col>
            {/* <Col className="destination-col">
            <Image className="destination-images" src={vicfalls}></Image>
            <h5>Victoria Falls</h5>
          </Col> */}
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col className="destination-col">
              <Image className="destination-image" src={heroes}></Image>
              <h5>Heroes Acre</h5>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Destinations;

{
  /* <Box className="destination-box container-fluid">
        <Grid
          className="destination-grid container-fluid"
          size={4}
          container
          spacing={2}
        >
          <Col className="destination-col">
           

            <Image className="destination-image" src={chinhoi}></Image>
            <h1>Chinhoi Caves</h1>

            <Image className="destination-image" src={vumba}></Image>
            <h1>Vumba Mountains</h1>

            <Image className="destination-image" src={mana}></Image>
            <h1>Mana Pools</h1>
          </Col>
        </Grid>
        <Grid
          className="destination-grid container-fluid"
          size={8}
          container
          spacing={2}
        >
          <Col>
            <Image className="destination-images" src={vicfalls}></Image>
            <h1>Vic Falls</h1>
          </Col>
        </Grid>
      </Box> */
}

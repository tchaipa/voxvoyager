import React from "react";
import "./Destinations.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Box, Grid, Link } from "@mui/material";
import vicfalls from "./assets/vicfalls.jpg";
import chinhoi from "./assets/chinhoi.jpg";
import vumba from "./assets/vumba.jpg";
import mana from "./assets/mana.jpg";

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
          <Col className="destination-col">
          <Image className="destination-image" src={vicfalls}></Image>
              {/* <h1>Victoria Falls</h1> */}
            
            
              <Image className="destination-image" src={chinhoi}></Image>
              {/* <h1>Chinhoi Caves</h1> */}
          
              <Image className="destination-image" src={vumba}></Image>
              {/* <h1>Vumba Mountains</h1> */}
            
            
              <Image className="destination-image" src={mana}></Image>
              {/* <h1>Mana Pools</h1> */}

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
      </Box>
    </div>
  );
}

export default Destinations;

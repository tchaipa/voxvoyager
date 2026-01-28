import { Box, Card, Divider, Grid } from "@mui/material";
import "./Packages.css";
import { Button, Image } from "react-bootstrap";
// import vumba from "./assets/vumba.jpg";
// import mana from "./assets/mana.jpg";
// import matopo from "./assets/matopo.jpg";
import sky from "./assets/sky.jpg";

function Packages() {
  return (
    <div className="packages-section container-fluid">
      <h2 className="packages-title">What We Offer</h2>
      <p>
        Our packages are designed to meet the needs of every traveler, from solo
        adventures to family trips.
      </p>
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
            <br />
            <Button className="packages-button">Get Started</Button>
          </div>
        </Grid>
        <Grid
          className="packages-grid container-fluid"
          size={4}
          container
          spacing={2}
        >
          <div className="packages-content container-fluid">
            {/* <span>
              We offer a curated selection of tour packages, catering various
              travel styles, themes and durations. <br />
              <br />
              These packages are designed to help you discover the destinations
              in Zimbabwe in an unforgettable way, whether you are looking for a
              relaxing beach vacation, an adrenaline-pumping adventure, or a
              cultural immersion experience.
            </span> */}
            <Image className="packages-image" src={sky}></Image>
          </div>
        </Grid>
      </Box>
      {/* <div className=" packages-card container-fluid">
        <Card>
          <Image className="packages-image" src={vumba}></Image>
          <div
            className="packages-content container-fluid
          "
          >
            <h3 className="packages-h3">Victoria Falls</h3>
            <h5 className="packages-h5">$150/person</h5>
            <a className="packages-a" href="">
              Book Now
            </a>
          </div>
        </Card>
        <Card>
          <Image className="packages-image" src={mana}></Image>
          <div
            className="packages-content container-fluid
          "
          >
            <h3 className="packages-h3">Victoria Falls</h3>
            <h5 className="packages-h5">$150/person</h5>
            <a className="packages-a" href="">
              Book Now
            </a>
          </div>
        </Card>
        <Card>
          <Image className="packages-image" src={matopo}></Image>
          <div
            className="packages-content container-fluid
          "
          >
            <h3 className="packages-h3">Victoria Falls</h3>
            <h5 className="packages-h5">$150/person</h5>
            <a className="packages-a" href="">
              Book Now
            </a>
          </div>
        </Card>
      </div>
      <div className="packages-buttons container-fluid">
        <Button>View all Packages</Button>
        <Button>Learn More</Button>
      </div> */}
    </div>
  );
}

export default Packages;

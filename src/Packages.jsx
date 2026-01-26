import { Card, Divider } from "@mui/material";
import "./Packages.css";
import { Button, Image } from "react-bootstrap";
import vumba from "./assets/vumba.jpg";
import mana from "./assets/mana.jpg";
import matopo from "./assets/matopo.jpg";
function Packages() {
  return (
    <div className="packages-section container-fluid">
      <h2 className="packages-title">Our Exclusive Tour & Travel Packages</h2>
      <p>
        Litora pede, recusandae amet aliquam. Cupiditate molestiae nec venenatis
        at massa risus, eum fugiat conubia integer at mattis.
      </p>
      <div className=" packages-card container-fluid">
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
      </div>
    </div>
  );
}

export default Packages;

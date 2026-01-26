import { Card, Divider } from "@mui/material";
import "./Packages.css";
import { Button, Image } from "react-bootstrap";
import vicfalls from "./assets/vicfalls.jpg";

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
          <Image className="packages-image" src={vicfalls}></Image>
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
          <Image className="packages-image" src={vicfalls}></Image>
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
          <Image className="packages-image" src={vicfalls}></Image>
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
        <Button>1</Button>
        <Button>2</Button>
      </div>
    </div>
  );
}

export default Packages;

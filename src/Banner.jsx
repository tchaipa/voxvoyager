import "./Banner.css";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";

function Banner() {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <h1 className="banner-title">
          Discover The Beauty & Wonders <br /> Of Zimbabwe With Us...
        </h1>
        <p className="banner-text">
          Possimus delectus suscipit, alias deleniti laboriosam quibusdam ipsam
          felis ipsum sollicitudin pharetra pellentesque sagittis ex.
        </p>
        <Button className="banner-button" variant="primary" href="destinations" >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Banner;

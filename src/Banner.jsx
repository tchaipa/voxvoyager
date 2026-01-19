import { Button } from "react-bootstrap";
import "./Banner.css";
import Navbar from "./Navbar";

function Banner() {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <h1>Discover The Beautiful World With Us...</h1>
        <p>
          Possimus delectus suscipit, alias deleniti laboriosam quibusdam ipsam
          felis ipsum sollicitudin pharetra pellentesque sagittis ex.
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  );
}

export default Banner;

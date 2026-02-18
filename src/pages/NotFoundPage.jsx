import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import { Button, Image } from "react-bootstrap";
import logo from "../assets/vox_logo.png";

function NotFoundPage() {
  return (
    <div className="notFound-page">
      <h1>404 Page Not Found</h1>
      <Link to={"/"}>
        <Button className="error-button">Go Back Home</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;

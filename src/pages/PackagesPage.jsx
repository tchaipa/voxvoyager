import "./PackagesPage.css";
import Navbarr from "../Navbar";
import Footer from "../Footer";
import { Card } from "@mui/material";
import pack1 from "../assets/vicfalls.jpg";

function PackagesPage() {
  return (
    <div className="packages-page container-fluid">
      <Navbarr />
      <div class="container my-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Packages</a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="packages-page-section container-fluid">
        <h1>Packages</h1>
        <Card className="pack-cards">
          <Card className="pack-card">
            <img className="pack-image" src={pack1} fluid />
          </Card>
          <Card className="pack-card">Bulawayo</Card>
          <Card className="pack-card">Mutare</Card>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default PackagesPage;

import { Card, Col, Row } from "react-bootstrap";
import "./Services.css";
import { FaBus, FaHotel } from "react-icons/fa";

function Services() {
  return (
    <div className="services-section container">
      <h2 className="services-title">Services</h2>
      <div className="services-content">
        <Row className="services-row">
          <Col className="services-col">
            <Card className="services-card">
              <FaBus />
              Transportaion
            </Card>
            <Card className="services-card">
              <FaHotel />
              Hotel
            </Card>
          </Col>
          <Col className="services-col">
            <Card className="services-card">Activities</Card>
            <Card className="services-card">Packages</Card>
          </Col>
          <Col className="services-col">
            <Card className="services-card">Allowances</Card>
            <Card className="services-card">Services</Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Services;

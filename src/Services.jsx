import { Box, Card, Grid } from "@mui/material";
import "./Services.css";
import { Col, Row } from "react-bootstrap";

function Services() {
  return (
    <div className="services-section container-fluid">
      <h2 className="services-title">Explore the services we offer:</h2>
      <Box className="services-box container-fluid">
        <Grid
          className="services-grid container-fluid"
          size={4}
          container
          spacing={2}
        >
          hhg8gyg7ygtvtv
        </Grid>
        <Grid
          className="services-grid container-fluid"
          size={8}
          container
          spacing={2}
        >
          <Row className="services-row container-fluid">
            <Col>
              <Card className="services-card container-fluid">1</Card>
            </Col>
            <Col>
              <Card className="services-card container-fluid">2</Card>
            </Col>
          </Row>
          <Row className="services-row container-fluid">
            <Col>
              <Card className="services-card container-fluid">3</Card>
            </Col>
            <Col>
              <Card className="services-card container-fluid">4</Card>
            </Col>
          </Row>
        </Grid>
      </Box>
    </div>
  );
}

export default Services;

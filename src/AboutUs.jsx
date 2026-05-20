import { Chip, Grid } from "@mui/material";
import "./AboutUs.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import packages from "./assets/wall.jpg";
import AnimatedContent from "./component/AnimatedContent";

function AboutUs() {
  return (
    // <div className="aboutus-section">
    //   {/* <Grid className="aboutus-grid"> */}
    //     <Row className="aboutus-row container-fluid">
    //       <Col className="aboutus-col">
    //         <Image src={packages} alt="" className="aboutus-image" fluid />
    //       </Col>
    //       <Col className="aboutus-col">
    //         <h2 className="aboutus-title">About Us</h2>
    //         <p>
    //           We offer a curated selection of tour packages, catering various
    //           travel styles, themes and durations. These packages are designed
    //           to help you discover the destinations in Zimbabwe in an
    //           unforgettable way, whether you are looking for a relaxing beach
    //           vacation, an adrenaline-pumping adventure, or a cultural immersion
    //           experience.
    //         </p>
    //         <div className="aboutus-chips">
    //           <Chip className="aboutus-chip-1 " label="CAMPING" />
    //           <Chip className="aboutus-chip-2" label="HIKING" />
    //           <Chip className="aboutus-chip-3" label="FAMILY VACATION" />
    //           <Chip className="aboutus-chip-4" label="CANOEING" />
    //         </div>
    //         <br />
    //         <div className="aboutus-chips ">
    //           <Chip className="aboutus-chip-4" label="CANOEING" />
    //           <Chip className="aboutus-chip-3" label="FAMILY VACATION" />
    //           <Chip className="aboutus-chip-2" label="HIKING" />
    //           <Chip className="aboutus-chip-1 " label="CAMPING" />
    //         </div>
    //       </Col>
    //     </Row>
    //   {/* </Grid> */}
    // </div>
    <div className="aboutus-section">
      <div className="aboutus-row row">
        <div className="aboutus-col col">
        <AnimatedContent
              distance={300}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1}
            >
            <Image src={packages} alt="" className="aboutus-image" fluid />
            </AnimatedContent>
        </div>
        <div className="aboutus-col col">
        <h2 className="aboutus-title">About Us</h2>
            <p>
               We offer a curated selection of tour packages, catering various
               travel styles, themes and durations. These packages are designed
               to help you discover the destinations in Zimbabwe in an
               unforgettable way, whether you are looking for a relaxing beach
               vacation, an adrenaline-pumping adventure, or a cultural immersion
               experience.
             </p>
             <div className="aboutus-chips">
               <Chip className="aboutus-chip-1 " label="CAMPING" />
               <Chip className="aboutus-chip-2" label="HIKING" />
               <Chip className="aboutus-chip-3" label="FAMILY VACATION" />
               <Chip className="aboutus-chip-4" label="CANOEING" />
             </div>
             <br />
             <div className="aboutus-chips ">
               <Chip className="aboutus-chip-4" label="CANOEING" />
    <Chip className="aboutus-chip-3" label="FAMILY VACATION" />
               <Chip className="aboutus-chip-2" label="HIKING" />
              <Chip className="aboutus-chip-1 " label="CAMPING" />
             </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;

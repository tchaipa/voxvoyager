import { Grid } from "@mui/material";
import "./Blog.css";
import { Card, Col, Image, Row } from "react-bootstrap";
import blogimage from "./assets/vicfalls.jpg";
import { FaArrowRight } from "react-icons/fa";


function Blog() {
  return (
    <div className="blog-section container">
      <h1>Our Latest Blogs</h1>
      <Grid className="blog-grid">
        <Row className="blog-row">
            <Col>
            <Card className="blog-card"> 
                <Image className="blog-card-image" src={blogimage}></Image>
                <div className="blog-card-content">
                <p>Top 5 Zimbabwean tourists sites</p>
                <a href="">Read More <FaArrowRight/></a>
                </div>
             

            </Card>
            </Col>
            <Col>
            <Card className="blog-card">
            <Image className="blog-card-image" src={blogimage}></Image>
            <div className="blog-card-content">
                <p>How to choose the right destination</p>
                <a href="">Read More <FaArrowRight/></a>
                </div>
            </Card>
            </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Blog;

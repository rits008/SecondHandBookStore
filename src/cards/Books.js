import React from "react";
import { Container, Row, Col ,Button} from "react-bootstrap";
import BookCard from "./BookCard";
//import Particle from "../Particle";
import Description from "./Description";
import { Switch } from "react-router";
import Book from "../Image/Book.jpg";

function Books() {

  return (
    <Container fluid className="project-section">
     {/*  <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Books </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are Some Books
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col  md={3} className="project-card">
            <BookCard
              imgPath={Book}
              isBlog={false}
              title="Book1"
              description="Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."
              
              
            />
          </Col>

          <Col md={3} className="project-card">
            <BookCard
              imgPath={Book}
              isBlog={false}
              title="Book2"
              description="Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."
            />
  
           
          </Col>

          <Col  md={3} className="project-card">
            <BookCard
              imgPath={Book}
              isBlog={false}
              title="Book3"
              description="Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."
              link={Description}
            />
          </Col>


          <Col md={3} className="project-card">
            <BookCard
              imgPath={Book}
              isBlog={false}
              title="Book4"
              description="Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."
            />
  
           
          </Col>

          <Col md={3} className="project-card">
            <BookCard
              imgPath={Book}
              isBlog={false}
              title="Book5"
              description="Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."
            />
  
           
          </Col>

          <Col md={3} className="project-card">
            <BookCard
              imgPath={Book}
              isBlog={false}
              title="Book6"
              description="Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."
            />
  
           
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Books;
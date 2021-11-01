import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import NavBar from "../Navbar/Navbar";
//import Particle from "../Particle";
import Book2 from "../Image/Book2.jpg";

import AboutCard from "./AboutCard";


function About() {
  return (
      <>
      <NavBar/>
    <Container fluid className="about-section">
     {/*  <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Welcome to  <strong className="purple">SecondHand Book Store</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Book2} alt="about" className="img-fluid  zee-section-prod-img img-responsive"  />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

    
      </Container>
    </Container>
            <Footer/>
         </>
  );
}

export default About;
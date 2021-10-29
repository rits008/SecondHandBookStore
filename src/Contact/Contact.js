import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ContactContent from "./ContactContent";
import { AiOutlineDownload } from "react-icons/ai";
import NavBar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <>
    <NavBar/>
    <Container fluid className="resume-section">
  
      <Container>
        <Row className="resume">
        <h3 className="resume-title">Group Members</h3>
          <Col md={6} className="resume-left">
        {/*   <h3 className="resume-title">Group Members</h3> */}
            <ContactContent
              title="Ritik Rajpoot"
              date="ID:- 201951128"
              content={[`email`]}
            />
            <ContactContent
              title="Shobhit Bansal"
              date="ID:- 201951145"
              content={["email"]}
            />
            <ContactContent
              title="Hritik Gautam"
              date="ID:- 201952217"
              content={["email"]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
           
           
            <ContactContent
              title="Raj"
              date="ID:- 201951123"
              content={["email"]}
            />
            <ContactContent
              title="Sachin Kumar Khandelwal"
              date="ID:- 201951130"
              content={["email"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Footer/>

    </>
  );
}

export default Contact;


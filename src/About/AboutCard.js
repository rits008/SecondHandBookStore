import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <i>
            Hi Everyone, I am <span className="purple">Ritik Rajpoot </span>
            from <span className="purple"> Orai, India.</span>
            <br />I am pursuing <span className="purple">B.Tech</span>  from <span className="purple">Indian Institute of Information Technology Vadodara </span>in <span className="purple">CSE Branch.</span>
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            </i>
          </p>
          <ul>
          <i>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            </i>
          </ul>

         {/*  <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
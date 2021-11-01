import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <i>
          <span className="purple">Worry Not! </span>
           beacause 
             <span className="purple"> SecondHand </span>
             is here to answer all your literary prayers. Knowledge is priceless but the books come with a bill and the SecondHand Team is committed to bring to you the best of the brilliant from the world of written text, at prices which are literally a steal. Call us the Robin Hood of ABCs for we shall use every weapon there is to meet your bibliophilic fantasies. So fellas’ put on your reading capes because it is time to fly into the mystical world of best sellers.
 
            <br />Never will you even have to scan over the price tag again as you pretend to read the preface. Let the only thing that comes between you and the next book be the 5 books you are reading right now. The books will always wait for you like loyal lovers with faithful hearts and the SecondHand Team, promises to be the best wingman ever.

            
            <br />
            <br />
            
            </i>
          </p>
  

           <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Thanks For Visiting Our Site
              
              Have a nice day !"
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
    </>
  );

}

export default AboutCard;
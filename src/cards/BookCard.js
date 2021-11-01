import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import Description from "./Description";

import {Link} from "react-router-dom";
function BookCard(props) {

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description1}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
        
        
        <Button variant="primary" href={props.link} target="_blank" >
          <BiLinkExternal /> &nbsp;
          View detail
        </Button>
        
      </Card.Body>
    </Card>
  );
}
export default BookCard;
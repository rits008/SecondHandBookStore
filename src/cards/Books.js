import React from "react";
import { Container, Row, Col ,Button} from "react-bootstrap";
import BookCard from "./BookCard";
//import Particle from "../Particle";
import Description from "./Description";
import { Switch } from "react-router";
import Book3 from "../Image/Book3.jpg";
import { AiFillPropertySafety } from "react-icons/ai";
import {useLocation} from "react-router";
import { useState,useEffect } from "react";
import axios from "axios";

function Books(props) {
 // console.log(props.x);


  const [book, setbook] = useState([]);
   
   
  useEffect(() => {
   
    const getbook = async ()=>
  {
     const res = await axios.get("/books");
     
    //console.log(res.data);
    setbook(res.data);
  }
 
   getbook();
  }, []) 

 console.log(book);

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

        {book.map((p)=>
        (
          <Col  md={3} className="project-card">
            <BookCard 
              imgPath={Book3}
              isBlog={false}
              title= {p.title}
              id = {p.id}
              description={`pages:- ${p.pages}` } 
              description1={`price:- ${p.price}`}
              description2={`author:-${p.author}`}
              link={`https://rajgupta123.pythonanywhere.com/books/${p.id}`}
            />
          </Col>
        ))}
         

         {/*  <Col md={3} className="project-card">
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
  
           
          </Col> */}
        
        </Row>
      </Container>
    </Container>
  );
}

export default Books;
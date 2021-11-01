import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Books from "../../cards/Books";
import Footer from "../../footer/Footer";
import NavBar from "../../Navbar/Navbar";
import "../../style.css"

function Home() {
  const [book,setbook] = useState([]);

  useEffect(() => {
   
    const fetchBooks = async ()=>
  {
     const res = await axios.get("/books")
     console.log(res.data);
    setbook(res.data);
  }

   fetchBooks();
  }, [])
  return (
    <section>
      <NavBar/>
      <Books x={book}/>
      <Footer/>
    </section>
  );
}

export default Home;
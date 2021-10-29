import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Books from "../../cards/Books";
import Footer from "../../footer/Footer";
import NavBar from "../../Navbar/Navbar";
import "../../style.css"

function Home() {
  return (
    <section>
      <NavBar/>
      <Books/>
      <Footer/>
    </section>
  );
}

export default Home;
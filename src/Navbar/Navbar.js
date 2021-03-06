import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import {MdOutlineContactMail,MdSell} from "react-icons/md"
import { CgFileDocument } from "react-icons/cg";
import {FiLogIn} from "react-icons/fi";
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <i>
        <h2 style={{color:"white",marginBottom: "2px"}}>Welcome</h2>
        </i>

        <Navbar.Brand href="/">
         {/*  <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineContactMail
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact
              </Nav.Link>
            </Nav.Item>
             

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/sellbook"
                onClick={() => updateExpanded(false)}
              >
                <MdSell style={{ marginBottom: "2px" }} /> SellBook
              </Nav.Link>
            </Nav.Item> 



            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => updateExpanded(false)}
              >
                <FiLogIn style={{ marginBottom: "2px" }} /> Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
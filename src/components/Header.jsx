import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFlower1 } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="navbarbg" expand="lg">
        <Container className="mainCountainer">
          <Navbar.Brand className="containersection  logotext" href="/">
            <BsFlower1 className="logosection" /> Photogram
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="containersection">
                Home
              </Link>
              <Link to="largeview" className="containersection">
                Large View
              </Link>
              <Link to="mediumview" className="containersection">
                Medium View
              </Link>
              <Link to="smallview" className="containersection">
                Small View{" "}
              </Link>
              <Link to="sorryBabu" className="containersection">
                I'm Sorry Babu{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};
export default Header;

import React from "react";
import logo from "../attachment_95171757.jpeg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/about">About</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/" style={{ margin: 50 }}>
              Home
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

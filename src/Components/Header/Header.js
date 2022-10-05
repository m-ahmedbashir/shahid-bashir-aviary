import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import "./Header.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="dark"
      sticky="top"
      className=""
    >
      <Container className="px-lg-5  nav-container">
        <Navbar.Brand href="/" className="nav-logo">
          <img
            src="images/logo.png"
            className="w-25 d-none d-lg-block"
            alt="logo"
          />
          <h5 className="d-lg-none pt-2 ps-1 d-block text-danger ">
            SB Aviary
          </h5>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-color"
        >
          <Hamburger color="#eb592d" />
          {/* <HiOutlineMenuAlt1 className="nav-color display-4" /> */}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-link-container">
            <Nav.Link href="/#hero" id="homelink" className="nav-link p-4 my-2">
              Home
            </Nav.Link>
            <Nav.Link
              href="/#about"
              id="aboutlink"
              className="nav-link p-4 my-2"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/#gallery"
              id="gallerylink"
              className="nav-link p-4 my-2"
            >
              Gallery
            </Nav.Link>
            <Nav.Link href="/#team" id="teamlink" className="nav-link p-4 my-2">
              Team
            </Nav.Link>
            <Nav.Link
              href="/#contactUs"
              id="contactlink"
              className="nav-link p-4 my-2"
            >
              Contact Us
            </Nav.Link>{" "}
            <Nav.Link
              href="/login"
              id="adminLink"
              className="nav-link p-4 my-2"
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

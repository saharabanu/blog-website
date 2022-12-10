import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


let navStyle = {
  textDecoration: "underline",
  color: "#9932cc",
  border: "0px solid black",
};

const Navigation = () => {
 
  return (
    <>
      <Navbar bg="" expand="lg" sticky="top" className="header-full">
        <Container>
          <Navbar.Brand href="/" className="text-white logo">
            Fashion Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="" />
          <Navbar.Collapse id="">
            <Nav className="mx-auto my-2 my-lg-0 text-dark" style={{ maxHeight: "100px" }}>
              <NavLink
                className="nav-items"
                to="/"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-items"
                to="/about"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                About Me
              </NavLink>
              <NavLink
                className="nav-items"
                to="/contact"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                Contact Me
              </NavLink>
              <NavLink
                className="nav-items"
                as={HashLink}
                to="/home#blogs"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                Blogs
              </NavLink>
              <NavLink
                className="nav-items"
                as={HashLink}
                to="/dashboard"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
               Dashboard
              </NavLink>
            </Nav>
            <Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

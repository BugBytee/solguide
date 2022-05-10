import React from "react";
import "./Navbar.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import {Link } from "react-router-dom"
function Navbar1() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="" >Appwrite</Navbar.Brand>
         <Link to="/contribute"> <Nav href="" className="pl-50">Contribute</Nav></Link>
          <Link to="/dashboard"><Nav href="" className="pl-50">Dashboard</Nav></Link>
          <Nav.Link href="">
            <Button variant="outline-dark" className="btn-logout">
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navbar1;

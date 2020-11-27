import React from "react";
import { Navbar, Nav, Form, FormControl, Button,Container } from "react-bootstrap";

const NavbarMod = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Cock Course</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
            <Nav.Link href="#">Blogs</Nav.Link>
            <Nav.Link href="#">Test Series</Nav.Link>
            <Nav.Link href="#">Interview Questions</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>

      </Navbar>
    </>
  )
}

export default NavbarMod;



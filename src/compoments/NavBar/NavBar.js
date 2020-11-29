import React from "react";
import { Navbar, Nav, Form, FormControl, Button,Container } from "react-bootstrap";

const NavbarMod = () => {

  const NavName = [
    {
      name:"Home",
      href:"#"
    },
    {
      name:"Courses",
      href:"#"
    },
    {
      name:"Blogs",
      href:"#"
    },
    {
      name:"Test Series",
      href:"#"
    },
    {
      name:"Interview Questions",
      href:"#"
    },
    {
      name:"Contact Us",
      href:"#"
    },
  ]
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Cock Course</Navbar.Brand>
          <Nav className="mr-auto">
            {
              NavName.map(data => (
              <Nav.Link href={data.href}>{data.name}</Nav.Link>
              ))
            }
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



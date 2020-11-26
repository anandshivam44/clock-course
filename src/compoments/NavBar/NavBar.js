import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarMod = () =>  {
    return (
        <>
        <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/VanossGaming-Logo.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
        </>
    )
}

export default NavbarMod;
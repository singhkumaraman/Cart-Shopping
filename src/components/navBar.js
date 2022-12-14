import React from 'react';
import {Navbar,Button,Container,Modal} from "react-bootstrap";
const NavBar = () => {
  return(
    <Navbar expand="sm">
     <Navbar.Brand href='/'>E-Commerce</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className='justify-content-end'>
     <Button >0-Item</Button>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;
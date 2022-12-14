import {React,useState} from "react";
import { Navbar, Button, Container, Modal } from "react-bootstrap";
const NavBar = () => {
 const [show,setShow]=useState(false);
 const handleClose=()=>setShow(false);
 const handleOpen=()=>setShow(true);
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleOpen}>0-Item</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This the Cart Body</Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;

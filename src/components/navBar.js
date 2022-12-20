import { React, useState, useContext } from "react";
import { Navbar, Button, Container, Modal, Card } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { getProductInfo } from "../Products";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const cart = useContext(CartContext);

  const num = cart.item.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
      <Container>
        <Navbar expand="sm">
          {/* tile on the left is done by navbrand  */}
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleOpen}>{num}-items</Button>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {num > 0 ? (
              <>
                <p>Items in your carts:</p>
                {cart.item.map((curProduct) => (
                  <Container>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          {getProductInfo(curProduct.id).title}
                        </Card.Title>
                        <Card.Text>Quantity: {curProduct.quantity}</Card.Text>
                        <h6>
                          total:{" "}
                          {curProduct.quantity *
                            getProductInfo(curProduct.id).price}
                        </h6>
                      </Card.Body>
                    </Card>
                  </Container>
                ))}
                <h1>Total:-{cart.getTotal().toFixed(2)}</h1>
                <Button >Proceed To Payment</Button>
              </>
            ) : (
              <p>Oops!! your cart is empty</p>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default NavBar;

import React from "react";
import { productsArray } from "../Products";
// import { productCard } from "../components/Productcard";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Store = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <h2 align="center" classname="p-3">
        {" "}
        Welcome To our Store{" "}
      </h2>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((products) => (
          <Col align="center">
            <Card>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>{products.price}</Card.Text>
                {cart.getProductsQuantity(products.id) > 0 ? (
                  <>
                    <div>
                      <div>In-cart:-{cart.getProductsQuantity(products.id)}</div>
                      <Button
                        variant="success"
                        className=" m-2"
                        onClick={() => cart.addToCart(products.id)}
                      >
                        +
                      </Button>

                      <Button
                        variant="success"
                        className=" m-2"
                        onClick={() => cart.removeFromCart(products.id)}
                      >
                        -
                      </Button>
                      <Button
                        variant="danger"
                        className=" m-2"
                        onClick={() => cart.deleteAll(products.id)}
                      >
                        Remove All
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button
                    sm={6}
                    className="mx-2"
                    variant="primary"
                    onClick={() => {
                      cart.addToCart(products.id);
                    }}
                  >
                    Add To Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

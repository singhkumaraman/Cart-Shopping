import React from "react";
import { productsArray } from "../Products";
// import { productCard } from "../components/Productcard";
import { Card, Button} from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
const Store = () => {
  return (
    <>
      <h2 align="center" classname="p-3">
        {" "}
        Welcome To our Store{" "}
      </h2>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((products) => (
          <Col align="center">
            {/* <productCard product={products} /> */}
            <Card>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>{products.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

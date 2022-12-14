import React from "react";
import { Card, Button} from "react-bootstrap";

const productCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>{props.product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default productCard;

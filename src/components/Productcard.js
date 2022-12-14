import React from "react";
import { Card, Button} from "react-bootstrap";

const productCard = (props) => {
  // const pro = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.pro.title}</Card.Title>
        <Card.Text>{props.pro.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default productCard;

import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../Products";
import {productCard}  from '../components/Productcard';
const Store = () => {
  return (
    <>
      <h2 align="center" classname="p-3">
        {" "}
        Welcome To our Store{" "}
      </h2>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((pro, idx) => (
          <Col align="center" key={idx}>
            <productCard product={pro} />
          </Col>
        ))}
      </Row>
    </>
  ); 
};

export default Store;

// import React from "react";
// import { Card, Button, Form, Row, Col } from "react-bootstrap";
// import { useContext } from "react";
// import { CartContext } from "../CartContext";

// const productCard = (props) => {
//   const cart = useContext(CartContext);
//   console.log(cart.item);
//   return (
//     <Card>
//       <Card.Body>
//         <Card.Title>{props.product.title}</Card.Title>
//         <Card.Text>{props.product.price}</Card.Text>
//         {cart.getProductsQuantity(props.product.id) > 0 ? (
//           <>
//             <Form as={Row}>
//               <Form.Label column="true" sm={6}>
//                 In Cart:{cart.getProductsQuantity(props.product.id)}
//               </Form.Label>
//             </Form>
//           </>
//         ) : (
//           <Button
//             sm={6}
//             className="mx-2"
//             variant="primary"
//             onClick={() => {
//               cart.addToCart(props.product.id);
//             }}
//           >
//             Add To Cart
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// };

// export default productCard;

import { createContext, useState } from "react";
import { productsArray, getProductInfo } from "./Products";

export const CartContext = createContext({
  item: [],
  getProductsQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteAll: () => {},
  getTotal: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  function getProductsQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id);
    if (quantity === undefined) return 0;
    return quantity.quantity;
  }

  function addToCart(id) {
    const quantity = getProductsQuantity(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }
  function removeFromCart(id) {
    const qunatity = getProductsQuantity(id);
    if (qunatity === 1) deleteAll(id);
    else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteAll(id) {
    setCartProducts(
      cartProducts.filter((product) => {
        return product.id !== id;
      })
    );
  }
  function getTotal() {
    let cost = 0;
    cartProducts.map((items) => {
      const data = getProductInfo(items.id);
      cost += data.price * items.quantity;
    });
    return cost;
  }
  const contextValue = {
    item: cartProducts,
    getProductsQuantity,
    addToCart,
    removeFromCart,
    deleteAll,
    getTotal,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;

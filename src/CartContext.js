import { createContext, useState } from "react";
import { productsArray } from "./Products";

export const CartContext = createContext({
  item: [],
  getProductsQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  delete: () => {},
  total: () => {},
});

export function CartProvider({ children }) {
  const contextValue = {
    item,
    getProductsQuantity,
    addToCart,
    removeFromCart,
    delete,
    total,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

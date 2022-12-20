const productsArray = [
  {
    id: "1",
    title: "Watch",
    price: 599,
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 299,
  },
  {
    id: "3",
    title: "Phone",
    price: 10000,
  },
];

const getProductInfo = (id) => {
  const info = productsArray.find((product) => product.id === id);

  if (info === undefined) console.log(`Product with id${id} does not exists.`);
  return info;
};

export { productsArray,getProductInfo };

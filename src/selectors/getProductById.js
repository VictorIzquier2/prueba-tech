import { products } from "../data/products";

// Devuelve un producto por su código ID
export const getProductById = (id) => {
  
  return products.find(product => product.id === id);
}

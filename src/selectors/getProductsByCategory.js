import { products } from "../data/products";

// Devuelve todos los productos de una misma categoría
export const getProductsByCategory = (publisher) => {
  
  const validPublishers = ['Safety', 'Janitorial', 'Tools', 'Woodworking', 'Gardening', 'OfficeSupplies'];
  
  if(!validPublishers.includes(publisher)){
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return products.filter(product => product.category === publisher);
}
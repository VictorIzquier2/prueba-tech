import React, { useMemo } from 'react';
import {getProductsByCategory} from '../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';

export const ProductsListByCategory = ({publisher}) => {
  // Optimización de la consulta a Publisher con el hook useMemo de React
  const products = useMemo(() => getProductsByCategory(publisher), [publisher])
  //const products = getProductsByCategory(publisher);

  return (
    <ul>
      {
        products.map(product => (
          <ProductCard 
            key={product.id}
            {...product}
          >
          </ProductCard>
        ))
      }
    </ul>
  )
}

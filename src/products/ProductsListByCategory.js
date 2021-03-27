import React, { useMemo } from 'react';
import {getProductsByCategory} from '../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';
import styled from '@emotion/styled';

const Product = styled.div`
  padding: 1rem!important;
  margin: 4rem 2rem;
  
  .product{
    display: flex;
    flex-direction: column;
    width: 32rem;
    padding: 1rem;
    margin: 0 auto;
    background-color: var(--baseWhite);
    border-radius: 2rem;
  }

  .product img{
    max-width: 28.5rem;
  }

  .details{
    display: flex;
    justify-content: space-between
  }

`;

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

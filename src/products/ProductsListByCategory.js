import React, { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import {getProductsByCategory} from '../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';
import styled from '@emotion/styled';

const ProductsByCategory = styled.div`
  .grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

`;

export const ProductsListByCategory = ({publisher}) => {
  // Optimización de la consulta a Publisher con el hook useMemo de React
  const products = useMemo(() => getProductsByCategory(publisher), [publisher])
  //const products = getProductsByCategory(publisher);
  
  return (
    <Container fluid='md'>
      <ProductsByCategory>
        <div className='grid'>
          {
            products.map(product => (
              <ProductCard 
                key={product.id}
                {...product}
              >
              </ProductCard>
            ))
          }
        </div>
      </ProductsByCategory>
    </Container>
  )
}

import React, { useMemo } from 'react';
import queryString from 'query-string';
import { products } from '../../data/products';
import { ProductCard } from '../../products/ProductCard';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

const Search = styled.div`
  .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

`;

export const SearchScreen = ({match}) => {

  // Obtener la búsqueda de la barra de navegación
  const search = match.params.search;

  const {q = ''} = queryString.parse(search);

  // Filtrar la búsqueda por nombre, descripción o categoría y optimizarla con el hook useMemo
  const productsFiltered = useMemo(() => products.filter(product => product.name.includes(q) || product.description.includes(q) || product.category.includes(q)), [q]);
  
  return (
    <Container fluid='md'>
      <Search>
        <div className='grid'>
          {
            productsFiltered.map(product => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))
          }
        </div>
      </Search>
    </Container>
  )
}

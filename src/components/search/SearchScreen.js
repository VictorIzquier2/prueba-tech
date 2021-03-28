import React, { useMemo } from 'react';
import queryString from 'query-string';
import { products } from '../../data/products';
import { ProductCard } from '../../products/ProductCard';

export const SearchScreen = ({match}) => {

  // Obtener la búsqueda de la barra de navegación
  const search = match.params.search;

  const {q = ''} = queryString.parse(search);

  // Filtrar la búsqueda por nombre, descripción o categoría y optimizarla con el hook useMemo
  const productsFiltered = useMemo(() => products.filter(product => product.name.includes(q) || product.description.includes(q) || product.category.includes(q)), [q]);
  
  return (
    <div>
      {
        productsFiltered.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))
      }

    </div>
  )
}

import React from 'react';
import {products} from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductsList = () => {
  
  return (
    <div className='card-deck animate__animated animate__fadeIn'>
      {
        products.map(product => (
          <ProductCard 
            { ...product }
            key={product.id}>
          </ProductCard>
        ))
      }
    </div>
  )
}
import React from 'react';
import {brands} from '../data/brands';

export const BrandsList = () => {

  return (
    <ul>
      {
        brands.map(brand => (
          <li key={brand.id}>
            {brand.name}
          </li>
        ))
      }
    </ul>
  )
}
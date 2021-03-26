import React from 'react';
import {categories} from '../data/categories';

export const CategoriesList = () => {

  return (
    <ul>
      {
        categories.map(category => (
          <li key={category.id}>
            {category.name}
          </li>
        ))
      }
    </ul>
  )
}
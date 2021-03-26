import React from 'react';
import { ProductsListByCategory } from '../../products/ProductsListByCategory';


export const SafetyScreen = () => {
  return (
    <div>
      <h1>Safety</h1>
      <hr/>
      <ProductsListByCategory publisher='Safety'/>
    </div>
  )
}

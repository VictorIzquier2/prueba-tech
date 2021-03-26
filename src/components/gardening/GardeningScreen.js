import React from 'react'
import { ProductsListByCategory } from '../../products/ProductsListByCategory'

export const GardeningScreen = () => {
  return (
    <div>
      <h1>Gardening</h1>
      <hr/>
      <ProductsListByCategory publisher='Gardening'/>
    </div>
  )
}

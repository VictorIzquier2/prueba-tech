import React from 'react'
import { ProductsListByCategory } from '../../products/ProductsListByCategory'

export const WoodworkingScreen = () => {
  return (
    <div>
      <h1>Woodworking</h1>
      <hr/>
      <ProductsListByCategory publisher='Woodworking'/>
    </div>
  )
}

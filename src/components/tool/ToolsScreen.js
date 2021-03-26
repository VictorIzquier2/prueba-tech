import React from 'react'
import { ProductsListByCategory } from '../../products/ProductsListByCategory'

export const ToolsScreen = () => {
  return (
    <div>
      <h1>Tools</h1>
      <hr/>
      <ProductsListByCategory publisher='Tools'/>
    </div>
  )
}

import React from 'react'
import { ProductsListByCategory } from '../../products/ProductsListByCategory'

export const OfficeSuppliesScreen = () => {
  return (
    <div>
      <h1>Office Supplies</h1>
      <hr/>
      <ProductsListByCategory publisher='OfficeSupplies'/>
    </div>
  )
}

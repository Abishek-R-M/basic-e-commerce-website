import React from 'react'
import PRODUCTS from '../../products';
import Product from "./product"
import "./shop.css"

const Shop = () => {
  return (
    <div className='shop'>
      <div className='products'>
        {PRODUCTS.map((product , index) => <Product  key={index} data={product}/> )}
      </div>
    </div>
  )
}

export default Shop;

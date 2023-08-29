import React, { useContext } from 'react'
import { shopContext } from '../../context/shopContext';

const Product = (props) => {

    const { id, productName, price, lowPrice, productImage } = props.data; 

    const {addToCart, cartItems} = useContext(shopContext)

    const itemAmount = cartItems[id]

  return (
    <div className='product'>
        <img src={productImage} alt='photes'/>
      <div className='description'>
       <p> {productName} </p>
       <p className='para'> <b> ₹ {price} </b> <span> ₹ {lowPrice}</span> </p>
      </div>
      <div></div>
      <button className='btn' onClick={() => addToCart(id)}>Add To Cart {itemAmount > 0 && <> ({itemAmount}) </>} </button>
    </div>
  )
}

export default Product;

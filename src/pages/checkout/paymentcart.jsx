import React, {useContext} from 'react'
import { shopContext } from '../../context/shopContext';

const Paymentcart = (props) => {

    const { id, productName, price, lowPrice, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart} = useContext(shopContext) 

  return (
    <div className='payment-cart'>
        <img src={productImage} alt='images' />
        <div className='cartproducts'>
          <p> {productName} </p>
          <p> <b> ₹ {price} </b> <span> ₹ {lowPrice} </span> </p>
          <lable>Quantity : </lable>
          <button className='cartbtn' onClick={ ()=> removeFromCart(id) }>-</button>
          <input className='cartbtn' value={cartItems[id] }/>
          <button className='cartbtn' onClick={ () => addToCart(id) }>+</button>
      </div>
    </div>
  )
}

export default Paymentcart;

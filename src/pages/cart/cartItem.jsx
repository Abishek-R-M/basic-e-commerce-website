import React , {useContext} from 'react'
import { shopContext } from '../../context/shopContext';
import "./cartitem.css"

const CartItem = (props) => {

    const { id, productName, price, lowPrice, productImage } = props.data;
    const { cartItems , addToCart, removeFromCart, updateItems} = useContext(shopContext) 

  return (
    <div className='cartitem'>
          <img src={productImage} />
        <div className='cartproducts'>
          <p> {productName} </p>
          <p> <b> ₹ {price} </b> <span> ₹ {lowPrice} </span> </p>
          <button className='cartbtn' onClick={ ()=> removeFromCart(id) }>-</button>
          <input className='cartbtn' value={cartItems[id] } onChange={(event) => updateItems(Number(event.target.value), id)}/>
          <button className='cartbtn' onClick={ () => addToCart(id) }>+</button>
      </div>
    </div>
  )
}

export default CartItem;

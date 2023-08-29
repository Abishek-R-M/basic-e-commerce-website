import React , {useContext} from 'react'
import PRODUCTS from '../../products';
import CartItem from './cartItem';
import { shopContext } from '../../context/shopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, getTotalAmount} = useContext(shopContext)

  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
    <div className='heading'> 
    {totalAmount > 0 ? <h1> Your Cart </h1> : <h1 className='headings'> 
    MISSING CART ITEMS ? </h1>}
          
    </div>
      <div>
          {
            PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0 ) {
                return <CartItem  data={ product } />
              }
              return null;
            })
          }
      </div>
      {totalAmount > 0 ?
      <div className='subtotal'>
        <p> SUB-TOTAL : <b> ₹ {totalAmount} </b> </p>
        <button type='submit' onClick={() => navigate("/")}>Continue Shopping</button>
        <button onClick={() => navigate("/chechout")}> Checkout</button>
      </div> : <></>
       }
    </div>
  )
}

export default Cart;


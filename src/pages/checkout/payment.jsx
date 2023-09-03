import React, { useContext } from 'react'
import GooglePayButton from "@google-pay/button-react";
import { shopContext } from '../../context/shopContext';
import PRODUCTS from '../../products';
import CartItem from './paymentcart';
import "./payment.css";
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const { cartItems, getTotalAmount } = useContext(shopContext)

  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div className='payment-container'>
    <div className='border'>
    <form className='payment-form'>
      <input type='radio' id='gpay' name='paymentMethod' />
      <label htmlFor='gpay'>
      <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
</label>
      <input type='radio' id='cod' name='paymentMethod' />
      <label htmlFor='cod'>COD (Cash on Delivery)</label>
    </form>
    </div>
    <div className='product-cart'>
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
      <div className='flex'>
        <div className='summary'>
          <h3>Order Summary</h3>
          <p>Items : <b> ₹ { totalAmount } </b> </p>
          <p>Delivery : <b> ₹ 40 </b> </p>
          <p className='order-totalBorder'>Order Total : <b> ₹ {totalAmount + 40 } </b> </p>
        </div>  
        <button className='payment-button' onClick={() => navigate("/thankyou")}>Place Order</button>
      </div>
        
    </div>
  </div>
  )
}

export default Payment;

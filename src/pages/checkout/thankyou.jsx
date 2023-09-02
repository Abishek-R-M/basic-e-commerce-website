import React from 'react'
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {

    const navigate =useNavigate();

  return (
    <div>
      <h1 className='final-heading'>ThankYou !!</h1>
      <p className='quote'>thank you for completeing the order we'll be in touch with you soon.</p>
      <button className='final-button' onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  )
}

export default Thankyou;

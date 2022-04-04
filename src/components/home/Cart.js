import React from 'react';
import Checkout from './Checkout';
import Sidebar from './Sidebar';

function Cart() {
  return (
    <div className='cart'>
        <Sidebar/>
        <Checkout/>
    </div>
  )
}

export default Cart
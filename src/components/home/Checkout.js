import React from 'react';
import {useStateValue} from '../../features/StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>

        {basket?.length === 0  ? (
            <div>
                <h1>Your Shopping Cart is empty</h1>
                <p>You have no items in your cart. To buy one or more items, click "Add to Cart" next to the item.</p>
            </div>
        ) : (
            <div>
            <h1>Your Shopping Cart</h1>
            { 
            basket.map((item) => (
                <CheckoutProduct 
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))
            }
        </div>  
        )
    
    }

    </div>
  )
}

export default Checkout
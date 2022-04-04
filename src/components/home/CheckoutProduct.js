import { Remove, StarOutline, StarRate } from '@mui/icons-material'
import React from 'react';
import {IconButton} from '@mui/material';
import { useStateValue } from '../../features/StateProvider';

function CheckoutProduct({id, name, brand, rating, reviews, price, image}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
            name: name
        })
    }

  return (
    <div className="CheckoutProduct">
        <img src={image} alt="" />

    <div className='CheckoutProduct__info'>
        <h3 className='CheckoutProduct__name'>{name}</h3>
    </div>

    <div className='CheckoutProduct__info'>
        <small></small>
        <strong>{price}</strong>
    </div>
    <div className='rate'>
                <StarRate/>
                <StarRate/>
                <StarRate/>
                <StarRate/>
                <StarOutline/>
                { rating}
    </div>

    <div className="button">
            <IconButton onClick={removeFromBasket} aria-label="add to shopping cart">
            <Remove />
            <span>Add to Cart</span>
            </IconButton>
            </div>

    </div>
  )
}

export default CheckoutProduct
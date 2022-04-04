import { ShoppingBag, StarOutline, StarRate } from '@mui/icons-material'
import React from 'react'
import {IconButton} from '@mui/material';
import {useStateValue} from '../../features/StateProvider';


function Product({ id, name, brand, rating, reviews, price, image}) {

    const[{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id: id,
                name: name,
                price: price,
            }
        })
    }

  return (
    <div className='main__product'>
        <div className='main__product-image'>
            <img src={image} alt="" />
        </div>

        <div className='main__product-details'>
            <h3 className="name"> {name} </h3>
            <h4 className="brand"> {brand} </h4>
            <div className="rating">
                <div className='rate'>
                <StarRate/>
                <StarRate/>
                <StarRate/>
                <StarRate/>
                <StarOutline/>
                { rating}
                </div>
           
            <span className='review'>({reviews} reviews)</span>
            </div>
            <div className='pricing'>
            <h3 className="price">${price}</h3>

            <div className="button">
            <IconButton onClick={addToBasket} aria-label="add to shopping cart">
            <ShoppingBag />
            <span>Add to Cart</span>
            </IconButton>
            </div>
            
            </div>
            
        </div>
    </div>
  )
}

export default Product
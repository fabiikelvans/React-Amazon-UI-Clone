export const initialState = {
    basket : [],
    user: null
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET' : 
        // Logic for adding item to cart
        return {
            ...state,
            basket : [...state.basket, action.basket]
        };
        case 'REMOVE_FROM_BASKET' :
        // Logic for removing item from cart

        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if( index >=0) {
            newBasket.splice(index, 1);
        }else {
            console.warn(
                `Can't remove item if the cart is empty`
            );
        }


        return {...state, basket: newBasket};
        default :
        return state;
    }
}

export default reducer;
import CartActionsTypes from './cart.types'
import { addItemToCart, removeItemFromCart, decreaseItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionsTypes.ADD_ITEM:

            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case CartActionsTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload)
            }
        case CartActionsTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemFromCart(state.cartItems, payload)
            }
        default: return state;
    }
}

export default cartReducer;

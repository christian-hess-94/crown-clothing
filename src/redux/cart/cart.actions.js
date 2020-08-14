import CardActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CardActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})
export const decreaseItem = (item) => ({
    type: CardActionTypes.DECREASE_ITEM,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: CardActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: CardActionTypes.CLEAR_CART,
})
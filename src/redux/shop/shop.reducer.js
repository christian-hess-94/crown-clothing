import ShopActionTypes from "./shop.types"
const initialState = {
    collections: null
}

const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ShopActionTypes.GET_COLLECTIONS:
            return { ...state }
        case ShopActionTypes.ADD_COLLECTIONS:
            return { ...state, collections: payload }
        default:
            return state
    }
}

export default shopReducer

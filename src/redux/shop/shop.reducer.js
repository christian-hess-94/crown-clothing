import ShopActionTypes from "./shop.types"
import SHOP_DATA from './shop.data'
const initialState = {
    collections: SHOP_DATA
}

const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ShopActionTypes.GET_COLLECTIONS:
            return { ...state }

        default:
            return state
    }
}

export default shopReducer

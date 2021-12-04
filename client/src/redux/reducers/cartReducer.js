import {
    GET_CART, GET_CART_FAIL, GET_CART_SUCCESS // get cart
} from "../consts/cartConsts"
const initialstate = {
    cart: [],
    loading: null,
    error: null
}
const cartReducer = (state = initialstate, { type, payload }) => {
    switch (type) {

        case GET_CART:
            return {
                ...state,
                cart: [],
                loading: true,
                error: null
            }

        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,

            }


        case GET_CART_FAIL:
            return {
                ...state,
                cart: [],
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export default cartReducer
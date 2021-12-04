import axios from "axios";
import {
    GET_CART, GET_CART_FAIL, GET_CART_SUCCESS,
    USER_ADD_TO_CART, USER_ADD_TO_CART_FAIL, USER_ADD_TO_CART_SUCCESS
} from "../consts/cartConsts";

//get cart by id
export const getCartById = (id) => async (dispatch) => {
    dispatch({ type: GET_CART })
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                authorization: token
            }
        }

        const { data } = await axios.get(`/cart/${id}`, config)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CART_FAIL, payload: error.response.data })
    }
}

/// add phone to cart
export const addPhoneToCart = (id, changes) => async (dispatch) => {
    dispatch({ type: USER_ADD_TO_CART })
    try {
        const { data } = await axios.put(`/user/${id}`, changes)
        dispatch({ type: USER_ADD_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_ADD_TO_CART_FAIL, payload: error.response.data })
    }
}
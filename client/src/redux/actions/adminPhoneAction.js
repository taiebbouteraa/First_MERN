import axios from "axios"
import {
    ADMIN_ADD_PHONE, ADMIN_ADD_PHONE_FAIL, ADMIN_ADD_PHONE_SUCCESS,
    ADMIN_DELETE_PHONE, ADMIN_DELETE_PHONE_FAIL, ADMIN_DELETE_PHONE_SUCCESS,
    ADMIN_EDIT_PHONE, ADMIN_EDIT_PHONE_FAIL, ADMIN_EDIT_PHONE_SUCCESS
} from "../consts/phonesConsts.js"

export const addPhone = (phone) => async (dispatch) => {
    dispatch({ type: ADMIN_ADD_PHONE })
    try {
        const { data } = await axios.post('/phones/new', phone)
        dispatch({ type: ADMIN_ADD_PHONE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_ADD_PHONE_FAIL, payload: error.response.data })
    }
}

export const deletePhone = (id) => async (dispatch) => {
    dispatch({ type: ADMIN_DELETE_PHONE })
    try {
        const { data } = await axios.delete(`/phones/${id}`)
        dispatch({ type: ADMIN_DELETE_PHONE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_DELETE_PHONE_FAIL, paload: error.response.data })
    }
}

export const editPhone = (id, changes) => async (dispatch) => {
    dispatch({ type: ADMIN_EDIT_PHONE })
    try {
        const { data } = await axios.put(`/phones/${id}`, changes)
        console.log(data)
        dispatch({ type: ADMIN_EDIT_PHONE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_EDIT_PHONE_FAIL, payload: error.response.data })

    }
}
import axios from "axios"
import {
    GET_PHONES, GET_PHONES_FAIL, GET_PHONES_SUCCESS
} from "../consts/phonesConsts"


//get all phones
export const getPhones = () => async (dispatch) => {
    dispatch({ type: GET_PHONES })
    try {
        const { data } = await axios.get('/phones')
        dispatch({ type: GET_PHONES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PHONES_FAIL, payload: error.response.data })
    }
}
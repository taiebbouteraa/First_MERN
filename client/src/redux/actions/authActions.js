import axios from 'axios'
import {
    GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, // current user consts
    LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, // login consts
    LOGOUT_USER,  //logout consts
    REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS //register consts
} from '../consts/authConsts'


//register action
export const register = (logins) => async (dispatch) => {
    dispatch({ type: REGISTER_USER })
    try {
        const { data } = await axios.post('/auth/register', logins)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
        localStorage.setItem("token", data.token)
        localStorage.setItem("admin", data.user.isAdmin)

    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data })
    }
}

//login action
export const login = (logins) => async (dispatch) => {
    dispatch({ type: LOGIN_USER })
    try {
        const { data } = await axios.post('/auth/login', logins)
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
        localStorage.setItem("token", data.token)
        localStorage.setItem("admin", data.user.isAdmin)
    } catch (error) {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data })
    }
}

//get profile action
export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE })
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                authorization: token
            }
        }
        const { data } = await axios.get('/auth/current', config)
        dispatch({ type: GET_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data })
    }
}

//logout action
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
}

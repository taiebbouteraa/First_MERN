import {
    GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, // current user consts
    LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, // login consts
    LOGOUT_USER,  //logout consts
    REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, //register consts
} from '../consts/authConsts'
const initialstate = {
    token: null,
    loading: null,
    error: null,
    auth: null,
    user: null,
}

const authReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case LOGIN_USER:
        case GET_PROFILE:
        case REGISTER_USER:
            return {
                ...state,
                loading: true
            }

        case REGISTER_USER_SUCCESS:
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: payload.token,
                user: payload.user,
                auth: true,
                error: null
            }

        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
                auth: true,
                error: null
            }


        case REGISTER_USER_FAIL:
        case LOGIN_USER_FAIL:
        case GET_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                auth: false,
                user: null,
                token: null,
                admin: null
            }

        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                user: null,
                auth: false,
                token: null,
                admin: null
            }

        default:
            return state;
    }

}

export default authReducer
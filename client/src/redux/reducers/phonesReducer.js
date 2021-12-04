import {
    ADMIN_ADD_PHONE, ADMIN_ADD_PHONE_SUCCESS, ADMIN_ADD_PHONE_FAIL,
    GET_PHONES, GET_PHONES_FAIL, GET_PHONES_SUCCESS, // get phones
    ADMIN_DELETE_PHONE, ADMIN_DELETE_PHONE_FAIL, ADMIN_DELETE_PHONE_SUCCESS,
    ADMIN_EDIT_PHONE, ADMIN_EDIT_PHONE_FAIL, ADMIN_EDIT_PHONE_SUCCESS
} from "../consts/phonesConsts"
const initialstate = {
    phones: [],
    loading: null,
    error: null
}
const phonesReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ADMIN_DELETE_PHONE:
        case ADMIN_ADD_PHONE:
        case GET_PHONES:
        case ADMIN_EDIT_PHONE:
            return {
                ...state,
                loading: true
            }

        ////get phones success
        case GET_PHONES_SUCCESS:
            return {
                ...state,
                phones: payload,
                loading: false
            }
        ////add phone success
        case ADMIN_ADD_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phones: [...state.phones, payload]
            }

        ////delete phone success
        case ADMIN_DELETE_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phones: state.phones.filter(el => el._id !== payload)
            }

        ////edit phone success
        case ADMIN_EDIT_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phones: state.phones.map((phone) => phone._id === payload._id ? { ...phone, ...payload } : phone)
            }

        ////fails
        case ADMIN_EDIT_PHONE_FAIL:
        case GET_PHONES_FAIL:
        case ADMIN_ADD_PHONE_FAIL:
        case ADMIN_DELETE_PHONE_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}

export default phonesReducer
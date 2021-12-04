import {
    ADD_COMP_PHONE,
    REMOVE_COMP_PHONE_1,
    REMOVE_COMP_PHONE_2
} from "../consts/phoneCompConsts"


export const addCompPhone = (payload) => {
    return {
        type: ADD_COMP_PHONE,
        payload: payload
    }
}

export const removeCompPhone1 = () => {
    return {
        type: REMOVE_COMP_PHONE_1,
    }
}

export const removeCompPhone2 = () => {
    return {
        type: REMOVE_COMP_PHONE_2,
    }
}
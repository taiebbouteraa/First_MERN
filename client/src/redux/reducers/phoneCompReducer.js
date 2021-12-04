import { ADD_COMP_PHONE, REMOVE_COMP_PHONE_1, REMOVE_COMP_PHONE_2 } from "../consts/phoneCompConsts";

const initialstate = {
    comp: {
        comp1: {
            phoneImage: '',
            model: '',
            mainCamera: '',
            frontCamera: '',
            RAM: '',
            storage: '',
            battery: '',
            price: '',
        },
        comp2: {
            phoneImage: '',
            model: '',
            mainCamera: '',
            frontCamera: '',
            RAM: '',
            storage: '',
            battery: '',
            price: '',
        }
    },
    loading: null,
    error: null
}
const phoneCompReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case REMOVE_COMP_PHONE_1:
            return {
                ...state,
                comp: {
                    ...state.comp,
                    comp1: {
                        phoneImage: '',
                        model: '',
                        mainCamera: '',
                        frontCamera: '',
                        RAM: '',
                        storage: '',
                        battery: '',
                        price: '',
                    },
                    comp2: state.comp.comp2
                }
            }
        case REMOVE_COMP_PHONE_2:
            return {
                ...state, comp: {
                    ...state.comp,
                    comp2: {
                        phoneImage: '',
                        model: '',
                        mainCamera: '',
                        frontCamera: '',
                        RAM: '',
                        storage: '',
                        battery: '',
                        price: '',
                    },
                    comp1: state.comp.comp1
                }
            }
        case ADD_COMP_PHONE:
            return {
                ...state,
                comp:
                    state.comp.comp1.phoneImage === '' ? { ...state.comp, comp1: payload }
                        : state.comp.comp2.phoneImage === '' ? { ...state.comp, comp2: payload }
                            : {
                                ...state.comp, comp: state.comp &&
                                    alert('Please remove a phone from the comparison table')
                            }
            }

        default:
            return state
    }
}

export default phoneCompReducer
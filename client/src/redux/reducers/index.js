import phoneCompReducer from './phoneCompReducer'
import phonesReducer from './phonesReducer'
// import adminPhoneReducer from './adminPhoneReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ phoneCompReducer, phonesReducer, authReducer, cartReducer /*, adminPhoneReducer, */ })

export default rootReducer
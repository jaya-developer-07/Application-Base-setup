import { combineReducers } from 'redux'
import authReducer from 'modules/Auth/reducers'

export default combineReducers({
  auth: authReducer,
})

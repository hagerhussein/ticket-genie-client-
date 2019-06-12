import {combineReducers} from 'redux'
import newUser from './newUser'
import authUser from './authUser'

export default combineReducers({
  newUser,
  authUser
})
import {combineReducers} from 'redux'
import newUser from './newUser'
import authUser from './authUser'
import events from './events'

export default combineReducers({
  newUser,
  authUser,
  events
})
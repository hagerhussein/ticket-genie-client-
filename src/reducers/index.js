import {combineReducers} from 'redux'
import newUser from './newUser'
import authUser from './authUser'
import events from './events'
import event from './event'

export default combineReducers({
  newUser,
  authUser,
  events,
  event
})
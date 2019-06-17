import { combineReducers } from 'redux'
import newUser from './newUser'
import authUser from './authUser'
import events from './events'
import event from './event'
import ticket from './ticket'
import comment from './comment'
import allTickets from './tickets'

export default combineReducers({
  newUser,
  authUser,
  events,
  event,
  ticket,
  comment,
  allTickets
})
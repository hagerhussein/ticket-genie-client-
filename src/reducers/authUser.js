import {LOGIN_SUCCESS} from '../actions/login'

export default function (state = null, action) {
  if (action.type === LOGIN_SUCCESS) return action.jwt
  return state
}
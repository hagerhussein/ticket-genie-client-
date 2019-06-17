import { SIGNUP_SUCCESS } from '../actions/signup'

export default function (state = null, action) {
  if (action.type === SIGNUP_SUCCESS) return action.userId
  return state
}
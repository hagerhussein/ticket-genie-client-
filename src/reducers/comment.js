import { CREATE_COMMENT } from '../actions/comments'

export default function (state = null, action) {
  switch(action.type) {
  case CREATE_COMMENT:
      return action.comment
      default:
        return state
}
}
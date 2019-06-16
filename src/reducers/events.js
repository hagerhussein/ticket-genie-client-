import { EVENTS_FETCHED , EVENT_CREATE_SUCCESS} from '../actions/events'

export default function (state = null, action) {
  switch(action.type) {
    case EVENTS_FETCHED:
    return action.events
    case EVENT_CREATE_SUCCESS:
      return [action.event, ...state]
    default:
      return state
  }
}
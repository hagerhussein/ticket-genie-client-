import{ ALL_TICKETS, EVENT_CREATE_SUCCESS } from '../actions/tickets'
export default function (state = [], action) {
  switch(action.type) {
      case ALL_TICKETS:
        return action.tickets
        case EVENT_CREATE_SUCCESS:
          return [action.event, ...state]
      default:
        return state
    }
  }
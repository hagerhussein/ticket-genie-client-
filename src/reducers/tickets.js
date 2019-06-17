import{ ALL_TICKETS, CREATE_TICKET_SUCCESS } from '../actions/tickets'
export default function (state = [], action) {
  switch(action.type) {
      case ALL_TICKETS:
        return action.tickets
        case CREATE_TICKET_SUCCESS:
          return action.ticket
      default:
        return state
    }
  }
import request from 'superagent'


export const TICKET_FETCHED = 'TICKET_FETCHED'
export const ALL_TICKETS = 'ALL_TICKETS'
export const CREATE_TICKET_SUCCESS = ' CREATE_TICKET_SUCCESS'

const baseUrl = 'http://localhost:4000'

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
})
const allTickets = tickets => ({
  type: ALL_TICKETS,
  tickets
})
const createTicketSuccess = ticket => ({
  type: CREATE_TICKET_SUCCESS,
  ticket
})
export const loadTicket = (id) => (dispatch, getState) => {
  const state = getState().ticket
  if (state && state.id === id) return

  request(`${baseUrl}/tickets/${id}`)
    .then(response => {
      dispatch(ticketFetched(response.body.ticket))
    })
    .catch(console.error)
}
export const loadTickets = () => (dispatch, getState) => {
  if (getState().tickets) return

  request(`${baseUrl}/tickets`)
    .then(response => {
      dispatch(allTickets(response.body.tickets))
    })
    .catch(console.error)
}

export const createTicket = (data) => (dispatch, getState) => {
  const jwt = getState().authUser
  request
    .post(`${baseUrl}/tickets`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(createTicketSuccess(response.body))
    })
    .catch(console.error)
}
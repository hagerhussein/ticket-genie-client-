import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'



const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})
const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return

  request(`${baseUrl}/events`)
    .then(response => {
      dispatch(eventsFetched(response.body.events))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch, getState) => {
  const state = getState().event
  if (state && state.id === id) return

  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body.event))
    })
    .catch(console.error)
}

export const createEvent = (data) => (dispatch, getState) => {
  const jwt = getState().authUser

  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

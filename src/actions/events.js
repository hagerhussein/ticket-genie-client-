import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'


const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED, 
  events
})

const eventFetched = (event) => ({
type: EVENT_FETCHED,
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
 


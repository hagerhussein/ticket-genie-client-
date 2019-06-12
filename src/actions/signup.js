import request from 'superagent'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

const baseUrl = 'http://localhost:4000'

const signupSuccess = (userId) => ({
  type: SIGNUP_SUCCESS,
  userId
})

export const signup = (firstName, lastName, email, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ firstName, lastName, email, password })
    .then(response => {
      dispatch(signupSuccess(response.body.userId))
    })
    .catch(console.error)
}
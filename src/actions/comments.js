import request from 'superagent'

export const CREATE_COMMENT = 'CREATE_COMMENT'

const baseUrl = 'http://localhost:4000'

const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
})

export const postComment = (data) => (dispatch, getState) => {
  const jwt = getState().authUser

  request
    .post(`${baseUrl}/comments`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(createComment(response.body))
    })
    .catch(console.error)
}
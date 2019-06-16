import React from 'react'

export default function PostCommentForm(props) {
  return (<form onSubmit={props.onPost}>
   <textarea name="comment" onChange={props.onChange} value={props.values.comment}></textarea>
    
    <button type="submit">Post</button>
  </form>)
}
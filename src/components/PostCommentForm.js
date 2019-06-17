import React from 'react'

export default function PostCommentForm(props) {
  return (<form onSubmit={props.onPost}>
   <textarea name="text" onChange={props.onChange} value={props.values.text}></textarea>
    
    <button type="submit">Post</button>
  </form>)
}
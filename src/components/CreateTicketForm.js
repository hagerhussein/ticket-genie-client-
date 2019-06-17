import React from 'react'

export default function CreateTicketForm(props) {
  return (
    <div>
    <h3> fill in the form to upload your ticket to sell for this event</h3>
  <form onSubmit={props.onSubmit}>
     <label>
      Picture:
      <input type="text" name="picture" onChange={props.onChange} value={props.values.picture} />
    </label>

    <label>
      Description:
      <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
    </label>

    <label>
     Price:
      <input type="text" name="price" onChange={props.onChange} value={props.values.price} />
    </label>
    <button type="submit">Save</button>
  </form></div>)
}
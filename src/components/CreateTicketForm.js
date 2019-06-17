import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateTicketForm(props) {
  return (
    <section>
      <div className="topnav">
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/login">Login</Link></h4>
        <h4><Link to="/signup">Create an account</Link></h4>
        <h4><Link to="/add event">Create an event</Link> </h4>
      </div>
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
        </form></div>
    </section>)
}
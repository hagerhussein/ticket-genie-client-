import React from 'react'
import { Link } from 'react-router-dom'
export default function EventForm(props) {
  return (
    <section>
      <div className="topnav">
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/login">Login</Link></h4>
        <h4><Link to="/signup">Create an account</Link></h4>
        <h4><Link to="/add event">Create an event</Link> </h4>
      </div>

      <div>
        <h3> Fill in the details below to create your event</h3>
        <form onSubmit={props.onSubmit}>
          <label>
            Name:
      <input type="text" name="name" onChange={props.onChange} value={props.values.name} />
          </label>

          <label>
            Location:
      <input type="text" name="location" onChange={props.onChange} value={props.values.date} />
          </label>

          <label>
            Description:
      <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
          </label>

          <label>
            Picture:
      <input type="text" name="picture" onChange={props.onChange} value={props.values.picture} />
          </label>

          <label>
            Start Date:
      <input type="text" name="startDate" onChange={props.onChange} value={props.values.startDate} />
          </label>

          <label>
            End Date:
      <input type="text" name="endDate" onChange={props.onChange} value={props.values.endDate} />
          </label>

          <button type="submit">Save</button>
        </form></div>
    </section>)
}
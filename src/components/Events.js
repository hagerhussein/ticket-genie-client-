import React from 'react'
import { Link } from 'react-router-dom'
import { TiLocation } from "react-icons/ti"



export default function Events(props) {
  return (
    <section>
      <div className="topnav">
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/login">Login</Link></h4>
        <h4><Link to="/signup">Create an account</Link></h4>
        <h4><Link to="/add event">Create an event</Link> </h4>
      </div>

      <div>

        {!props.events && 'Loading events...'}

        {props.events && props.events.map(event => (
          <section> <img src={event.picture} className='events' alt={event.name} />
            <h2 key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></h2>
            <i><TiLocation />{event.location}</i>
            <h4>{new Date(event.startDate).toDateString()} - {new Date(event.endDate).toDateString()} </h4>
          </section>
        ))}
      </div>
    </section>

  )
}
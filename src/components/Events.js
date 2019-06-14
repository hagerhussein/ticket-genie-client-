import React from 'react'
import {Link} from 'react-router-dom'


export default function Events(props) {
  return (
   <div>
   
      { !props.events && 'Loading events...'}

      { props.events && props.events.map (event =>(
     <section> <img src= {event.picture} className='ads' alt={event.name}/>
      <h2 key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></h2>
      <i>{event.location}</i>
      <p>{event.startDate}</p>
      </section>
      ))}
  </div>
    )
}
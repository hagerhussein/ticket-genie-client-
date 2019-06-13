import React from 'react'


export default function Events(props) {
  return (
   <div>
   
      { !props.events && 'Loading events...'}

      { props.events && props.events.map (event =>(
     <section> <img src= {event.picture} className='ads' alt={event.name}/>
      <h2>{event.name}</h2>
      <i>{event.location}</i>
      <p>{event.startDate}</p>
      </section>
      ))}
  </div>
    )
}
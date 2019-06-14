import React from 'react'

export default function EventDetails(props) {
  console.log(props.tickets)
  return (
 
    <div>
       {!props.event && 'Loading event data...'}

     {props.event && <div> 
       <h1>{props.event.name}</h1>
        <p>{props.event.description}</p>
        </div>}
        {props.tickets && props.tickets.map(ticket => (
          <div> 
            <p>{ticket.description}</p>
          </div>
        ))}
       </div>
    )
}
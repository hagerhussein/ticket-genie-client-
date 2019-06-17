/* eslint-disable no-self-compare */
import React from 'react'
import {Link} from 'react-router-dom'

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
            <p key={ticket.id}><Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link></p>
          </div>
        ))}
        <button><Link to= "/add ticket">Add your ticket</Link></button>
       </div>
    ) 
}
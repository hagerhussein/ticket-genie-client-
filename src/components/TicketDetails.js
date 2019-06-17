import React from 'react'
import {Link} from 'react-router-dom'

export default function TicketDetails(props) {
  return (
    <section>
<div className="topnav">
<h4><Link to="/">Home</Link></h4>
<h4><Link to="/login">Login</Link></h4>
<h4><Link to="/signup">Create an account</Link></h4>
<h4><Link to="/add event">Create an event</Link> </h4>
</div>
    <div>
      {!props.ticket && 'Loading ticket data...'}

      {props.ticket && <div>
        <h2>Ticket details: {props.ticket.description}</h2>
        <i>Price: {props.ticket.price} euros</i>
        <br></br>
        <br></br>
        <br></br>
        <i>Fraud risk: {props.ticket.risk}%</i>
      </div>}
      <hr></hr>
      <p>All comments</p>
      {props.comments && props.comments.map(comment => (
        <div>
          <h4 key={comment.id}>{comment.text}</h4>
          <i>{new Date(comment.createdAt).toDateString()}</i>
        </div>
      ))}
    </div>
    </section>
  )
}
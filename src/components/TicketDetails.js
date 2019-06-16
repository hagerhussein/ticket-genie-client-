import React from 'react'


export default function TicketDetails(props) {
  return (

    <div>
      {!props.ticket && 'Loading ticket data...'}

      {props.ticket && <div>
        <h1>{props.ticket.description}</h1>
        <p>{props.ticket.price}</p>
      </div>}
      {props.comments && props.comments.map(comment => (
        <div>
          <p key={comment.id}>{comment.text}</p>
          <i>{comment.createdAt}</i>
        </div>
      ))}
    </div>
  )
}
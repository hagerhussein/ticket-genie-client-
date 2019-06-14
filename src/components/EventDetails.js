import React from 'react'

export default function EventDetails(props) {
  
  if (!props.event) return 'Loading event data...'

  return (
    <div><h1>{props.event.name}</h1>
        
    <i>Date: {props.event.date}</i>
    
    <p>{props.event.description}</p>
    </div>)
}
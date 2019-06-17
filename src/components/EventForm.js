import React from 'react'

export default function EventForm(props) {
  return (
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
  </form></div>)
}
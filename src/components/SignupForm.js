import React from 'react'
import {Link} from 'react-router-dom'



export default function SignupForm(props) {
  return (
    <section>
<div className="topnav">
<h4><Link to="/">Home</Link></h4>
<h4><Link to="/login">Login</Link></h4>
<h4><Link to="/signup">Create an account</Link></h4>
<h4><Link to="/add event">Create an event</Link> </h4>
</div>
    <div>
  <p>Please provide your details below to create an account</p>
  <form className="form" onSubmit={props.onSubmit}>
    <label>
      First Name:
    <input type="text" name="firstName" value={props.values.firstName} onChange={props.onChange} />
    </label>
    <label>
      Last Name:
    <input type="text" name="lastName" value={props.values.lastName} onChange={props.onChange} />
    </label>
    <label>
      Email:
      <input type="text" name="email" value={props.values.email} onChange={props.onChange} />
    </label>
    <label>
      Password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} />
    </label>

    <button type="submit"><Link to="/login">Signup</Link></button>
  </form></div>
  </section>)
}

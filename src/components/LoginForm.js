import React from 'react'
import {Link} from 'react-router-dom'

export default function LoginForm(props) {
  return (
    <section>
<div className="topnav">
<h4><Link to="/">Home</Link></h4>
<h4><Link to="/login">Login</Link></h4>
<h4><Link to="/signup">Create an account</Link></h4>
<h4><Link to="/add event">Create an event</Link> </h4>
</div>
<div>
  <form onSubmit={props.onSubmit}> 
    <label>
      Email:
      <input type="text" name="email" value={props.values.email} onChange={props.onChange} />
    </label>
    <label>
      Password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} />
    </label>
    
    <button type="submit">Login</button>
  </form>
  </div>
  </section>)
}
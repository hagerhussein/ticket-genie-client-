import React from 'react'

export default function SignupForm(props) {
  return (<form onSubmit={props.onSubmit}>
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

    <button type="submit">Signup</button>
  </form>)
}
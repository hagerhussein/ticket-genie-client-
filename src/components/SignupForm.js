import React from 'react'

export default function SignupForm(props) {
  return (<form onSubmit={props.onSubmit}>
    <label>
      First Name:
    <input type="text" name="First Name" value={props.value.firstName} onChange={props.onChange} />
    </label>
    <label>
      Last Name:
    <input type="text" name="Last Name" value={props.value.lastName} onChange={props.onChange} />
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
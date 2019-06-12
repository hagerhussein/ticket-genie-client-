import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/signup'
import SignupForm from './SignupForm'

class SignupFormContainer extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return <SignupForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
  }
}

export default connect(null, { signup })(SignupFormContainer)
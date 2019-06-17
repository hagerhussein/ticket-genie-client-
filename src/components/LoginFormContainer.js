import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import LoginForm from './LoginForm'

class LoginFormContainer extends React.Component{
  state = {
    email: '',
    password: ''
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    console.log(this.props.authUser)
    if(this.props.authUser) {
      return this.props.history.push("/")
    } else{
      return this.props.history.push("/login")
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
  }
  }
  const mapStateToProps = state => ({
   authUser: state.authUser
  })
export default connect(mapStateToProps, {login})(LoginFormContainer)
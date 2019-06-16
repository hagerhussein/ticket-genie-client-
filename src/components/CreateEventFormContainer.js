import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../actions/events'
import EventForm from './EventForm'

class CreateEventFormContainer extends React.PureComponent {
  state = {
    name: '',
    location:'',
    description: '',
    picture: '',
    startDate: '',
    endDate:''
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
    name: '',
    location:'',
    description: '',
    picture: '',
    startDate: '',
    endDate:''
    })
    this.props.createEvent(this.state)
  }
  
  render() {
    return (<EventForm 
      onSubmit={this.onSubmit} 
      onChange={this.onChange} 
      values={this.state}
    />)
  }
}

export default connect(null, {createEvent})(CreateEventFormContainer)
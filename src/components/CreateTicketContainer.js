import React from 'react'
import { connect } from 'react-redux'
import {  createTicket } from '../actions/tickets'
import CreateTicketForm from './CreateTicketForm'

class CreateTicketFormContainer extends React.PureComponent {
  state = {
    picture: '',
    description: '',
    price: '',
    eventId: this.props.event.id
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      picture: '',
      description: '',
      price: '',
     
    })
    this.props.createTicket(this.state)
    this.props.history.push("/")
  }
  render() {
    return (
    <div>
    <CreateTicketForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
   </div>)
  }
}
const mapStateToProps = state => ({
  event: state.event,
  tickets: state.event.tickets,
  allTickets: state.allTickets,
  ticket: state.ticket
})
export default connect(mapStateToProps, { createTicket })(CreateTicketFormContainer)
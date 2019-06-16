/* eslint-disable no-self-compare */
import React from 'react'
import { connect } from 'react-redux'
import { loadEvent } from '../actions/events'
import EventDetails from './EventDetails'
import { loadTickets, createTicket } from '../actions/tickets'
import CreateTicketForm from './CreateTicketForm'

class EventDetailsContainer extends React.PureComponent {
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
  }
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
    console.log(this.props.tickets)
    this.props.loadTickets()
    console.log(this.props.allTickets)

  }
  componentDidUpdate(prevProps, prevState) {
    let totalPrice = this.props.tickets.map(ticket => ticket.price)
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    console.log(totalPrice)
    let numberOfTickets = this.props.tickets.length
    let avrgPrice = totalPrice / numberOfTickets
    const priceRisk = (ticket) => {
      let difOfPrice = avrgPrice - ticket.price
      if (difOfPrice > 0) {
        return ticket.risk += difOfPrice
      } if (difOfPrice < 0) {
        return ticket.risk = ticket.risk + difOfPrice
      }
      if (difOfPrice < -10) {
        return ticket.risk -= 10
      } else {
        return ticket.risk
      }
    }
    const timeRisk = (ticket) => {
      let time = new Date(ticket.createdAt).getUTCHours()
      if (time >= 9 && time <= 17) {
        return ticket.risk -= 10
      } else { return ticket.risk += 10 }
    }
    const commentsRisk = (ticket) => {
      if (ticket.comments.length > 3) {
        return ticket.risk += 5
      } else {
        return ticket.risk
      }
    }
  }


  render() {
    return (
    <div><EventDetails event={this.props.event} tickets={this.props.tickets} />)
    <CreateTicketForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
   </div>)
  }
}
// {event && match.params.id === event.id && event} 
const mapStateToProps = state => ({
  event: state.event,
  tickets: state.event.tickets,
  allTickets: state.allTickets
})

export default connect(mapStateToProps, { loadEvent, loadTickets, createTicket })(EventDetailsContainer)
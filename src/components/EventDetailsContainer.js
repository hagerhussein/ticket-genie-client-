/* eslint-disable no-self-compare */
import React from 'react'
import { connect } from 'react-redux'
import { loadEvent } from '../actions/events'
import EventDetails from './EventDetails'
import { loadTickets } from '../actions/tickets'


class EventDetailsContainer extends React.PureComponent {
 
 
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
    const commentsRisk = (ticket) => {
      if (ticket.comments.length > 3) {
        return ticket.risk += 5
      } else {
        return ticket.risk
      }
    }
    this.props.tickets.forEach(ticket => {
      let finalRisk = priceRisk(ticket);
     //let riskTwo =  commentsRisk(ticket)
    });
  }


  render() {
    return (
    <div>
      <EventDetails event={this.props.event} tickets={this.props.tickets} />
   </div>)
  }
}
const mapStateToProps = state => ({
  event: state.event,
  tickets: state.event.tickets,
  allTickets: state.allTickets
})

export default connect(mapStateToProps, { loadEvent, loadTickets })(EventDetailsContainer)
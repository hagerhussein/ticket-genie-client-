export default function priceRisk(ticket) {
  let totalPrice = this.props.tickets.map(ticket => ticket.price)
    .reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  let numberOfTickets = this.props.tickets.length
  let avrgPrice = totalPrice / numberOfTickets
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
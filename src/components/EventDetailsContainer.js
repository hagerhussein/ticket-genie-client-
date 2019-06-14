import React from 'react'
import {connect} from 'react-redux'
import { loadEvent } from '../actions/events'
import EventDetails from './EventDetails'

class EventDetailsContainer extends React.PureComponent {
  
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
    
   
  }
  
    
  render() {
    
  //  const {match, event} = this.props
    return (<EventDetails event={this.props.event} tickets={this.props.tickets} />)
}}
// {event && match.params.id === event.id && event} 
const mapStateToProps = state => ({
  event: state.event,
  tickets: state.event.tickets
})

export default connect(mapStateToProps, {loadEvent})(EventDetailsContainer)
import React from 'react'
import {connect} from 'react-redux'
import { loadEvent } from '../actions/events'
import EventDetails from './EventDetails'

class EventDetailsContainer extends React.PureComponent {
  
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }
  render() {
    const {match, event} = this.props
    return (<EventDetails event={event && match.params.id == event.id && event}  />)
}}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent})(EventDetailsContainer)
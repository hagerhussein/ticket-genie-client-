import React from 'react'
import {connect} from 'react-redux'
import Events from './Events'
import { loadEvents } from '../actions/events'


class EventsContainer extends React.Component {
  componentDidMount(){
    this.props.loadEvents()
  }
  render() {
   return <Events events = {this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsContainer)
import React from 'react'
import { connect } from 'react-redux'
import { loadTicket } from '../actions/tickets'
import TicketDetails from './TicketDetails'
import PostCommentForm from'./PostCommentForm'
import { postComment } from '../actions/comments'

class TicketDetailsContainer extends React.Component {
  state = {
    text: ''
  }

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id))
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onPost = (event) => {
    event.preventDefault()
    this.props.postComment(this.state.text, this.props.ticketId)
  }
  

  
  render() {
    return (
      <div>
    <TicketDetails ticket={this.props.ticket} comments={this.props.comments} />
  
    
    <PostCommentForm onChange={this.props.onChange} onSubmit={this.props.onPost} values={this.state} />
    </div>
    )
  }
}
const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.ticket.comments,
  comment: state.text
})

export default connect(mapStateToProps, { loadTicket, postComment })(TicketDetailsContainer)

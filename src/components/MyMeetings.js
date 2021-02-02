import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyMeetings = props => {
    // const meetingCards = props.meetings.length > 0 ?
    // props.meetings.map(t => (<p key={t.id}><Link to={`/meetings/${t.id}`}>{t.attributes.name}</Link></p>)) :
    // null


 
  return(
      <p> in My Meetings</p>
    //   meetingCards
  )

  
}

// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    meetings: state.MyMeetings
  }
}

export default connect(mapStateToProps)(MyMeetings)
import React, {Componet} from "react";
import {getMyMeetings} from "../actions/myMeetings"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyMeetings = props => {
  console.log("MyMeeting component props", props)
    // const meetingCards = props.meetings.length > 0 ?
    // props.meetings.map(t => (<p key={t.id}><Link to={`/meetings/${t.id}`}>{t.attributes.name}</Link></p>)) :
    // null
    
    let today = new Date()
     let dd = String(today.getDate()).padStart(2, '0');
     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     let  yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;

  

 
  return(
      <p> in My Meetings</p>,
      <h3>{today}</h3>
      //  meetingCards
    

  )

  
}





// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  console.log("state in MyMeetings", state)
  return {
    meetings: state.meetings
  }
}

export default connect(mapStateToProps)(MyMeetings)
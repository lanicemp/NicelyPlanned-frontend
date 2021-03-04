import React from 'react';
// import React, {Componet} from "react";
import {getMyMeetings} from "../actions/myMeetings"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MyMeetings extends React.Component {
  
  componentDidMount(){
    // this.props.getMyMeetingsWithDispatch()
    this.props.getMyMeetings()
  
  }
    
  
   
  

 render(){
 
    console.log("this.props", this.props)

     let today = new Date()
     let dd = String(today.getDate()).padStart(2, '0');
     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     let  yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;


    const meetingCards = this.props.meetings.length > 0 ?
    this.props.meetings.map(t => (<p key={t.id}><Link to={`/meetings/${t.id}`}>{t.title}</Link></p>)) :
    null


  return(
      <p> in My Meetings</p>,
      <h3>{today}</h3>,
       meetingCards
    

  )
 }
  
}

// const mapDispatchToProps = (dispatch) => { 
//   return {
//     getMyMeetingsWithDispatch: () => dispatch(getMyMeetings())
//   }
// }

//connect is the bridge to the react componet and redux
//dispatch makes a copy of my action creator with dispatch functionality. 


// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  console.log("state in MyMeetings", state)
  return {
    meetings: state.myMeetings
  }
}

export default connect(mapStateToProps, {getMyMeetings})(MyMeetings)
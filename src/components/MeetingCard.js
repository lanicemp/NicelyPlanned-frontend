import React from 'react'
import {Link, StaticRouter,Route} from 'react-router-dom'
import EditMeetingFormWrapper from "./EditMeetingFormWrapper";
import moment from 'moment';

const MeetingCard = ({ meeting }) => {
console.log(meeting)
  let  time= new Date(meeting.start_time) ;
  let startTime = moment(time).add(5,"hours").format("LT")
  let etime = new Date(meeting.end_time)
  let endTime = moment(etime).add(5,"hours").format("LT")
  let date = moment(meeting.date).format("MM/DD/YYYY")
  console.log("moment date", moment(meeting.date).format("MM/DD/YYYY"))
  const now = new Date()
  console.log("meeting in Card", meeting)

  return (
    meeting ?
      <div>
        <h3>{meeting.title}</h3>
        <h4>Date of Event: {date}</h4>
        <p>Start time: {startTime}</p>
        <p>End time: {endTime}</p>
        <p>Details: {meeting.detail}</p>
        <p>Comment: {meeting.comment}</p>
        <Link to={`/meetings/${meeting.id}/edit`}>Edit this meeting</Link>
        <Route exact path={`/meetings/${meeting.id}/edit`} component={EditMeetingFormWrapper} />
      </div> :
      <p>This the the Meeting card with no meeting!</p>
  )
}

export default MeetingCard
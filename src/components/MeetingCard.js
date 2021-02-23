import React from 'react'
import {Link, StaticRouter} from 'react-router-dom'
import moment from 'moment';

const MeetingCard = ({ meeting }) => {

  let  time= new Date(meeting.attributes.start_time) ;
  let startTime = moment(time).add(5,"hours").format("LT")
  let etime = new Date(meeting.attributes.end_time)
  let endTime = moment(etime).add(5,"hours").format("LT")
  let date = moment(meeting.attributes.date).format("MM/DD/YYYY")
  console.log("moment date", moment(meeting.attributes.date).format("MM/DD/YYYY"))
  const now = new Date()
  console.log("meeting in Card", meeting)

  return (
    meeting ?
      <div>
        <h3>{meeting.attributes.title}</h3>
        <h4>Date of Event: {date}</h4>
        <p>Start time: {startTime}</p>
        <p>End time: {endTime}</p>
        <p>Details: {meeting.attributes.detail}</p>
        <p>Comment: {meeting.attributes.comment}</p>
        <Link to={`/meetings/${meeting.id}/edit`}>Edit this meeting</Link>
      </div> :
      <p>This the the Meeting card with no meeting!</p>
  )
}

export default MeetingCard
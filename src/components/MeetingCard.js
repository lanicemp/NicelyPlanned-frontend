import React from 'react'
import {Link} from 'react-router-dom'

const MeetingCard = ({ meeting }) => {

  const date= new Date(meeting.attributes.start_time) 
  console.log("meeting in Card", meeting)
  console.log("date", date)
  return (
    meeting ?
      <div>
        <h3>{meeting.attributes.title}</h3>
        <p>{meeting.attributes.start_time}</p>
        <p>{meeting.attributes.end_time}</p>
        <Link to={`/meetings/${meeting.id}/edit`}>Edit this meeting</Link>
      </div> :
      <p>This the the Meeting card with no meeting!</p>
  )
}

export default MeetingCard
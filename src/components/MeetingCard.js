import React from 'react'
import {Link} from 'react-router-dom'

const MeetingCard = ({ meeting }) => {
  return (
    meeting ?
      <div>
        <h3>{meeting.attributes.name}</h3>
        <p>{meeting.attributes.start_date}</p>
        <p>{meeting.attributes.end_date}</p>
        <Link to={`/meetings/${meeting.id}/edit`}>Edit this meeting</Link>
      </div> :
      <p>This the the Meeting card with no meeting!</p>
  )
}

export default MeetingCard
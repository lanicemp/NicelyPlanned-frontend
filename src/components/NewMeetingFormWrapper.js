import React from 'react';
import MeetingForm from './MeetingForm'
import { createMeeting } from '../actions/myMeetings'
import { connect } from 'react-redux'

const NewMeetingFormWrapper = ({ history, createMeeting }) => {

  const handleSubmit = (formData, userId) => {
    console.log("usedId", userId)
  console.log("formData in wrapper", formData)
    createMeeting({
      ...formData,
      userId
    }, history)
  }
  return  <MeetingForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createMeeting })(NewMeetingFormWrapper);
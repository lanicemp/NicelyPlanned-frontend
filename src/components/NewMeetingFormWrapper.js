import React from 'react';
import MeetingForm from './MeetingForm'
import { createMeeting } from '../actions/myMeetings'
import { connect } from 'react-redux'

const NewMeetingFormWrapper = ({ history, createMeeting }) => {

  const handleSubmit = (formData, userId) => {
    createMeeting({
      ...formData,
      userId
    }, history)
  }
  return  <MeetingForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createMeeting })(NewMeetingFormWrapper);
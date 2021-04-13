import React from 'react';
import MeetingForm from './MeetingForm'
import { updateMeeting, deleteMeeting } from '../actions/myMeetings'
import { setFormDataForEdit, resetMeetingForm } from '../actions/meetingForm'
import { connect } from 'react-redux'

class EditMeetingFormWrapper extends React.Component {
  componentDidMount(){
    this.props.meeting && this.props.setFormDataForEdit(this.props.meeting)
  }

  componentDidUpdate(prevProps) {
    this.props.meeting && !prevProps.meeting && this.props.setFormDataForEdit(this.props.meeting)
  }

  componentWillUnmount() {
    this.props.resetMeetingForm()
  }

  handleSubmit = (formData) => {
    const { updateMeeting, meeting, history } = this.props
    updateMeeting({
      ...formData,
      meetingId: meeting.id
    }, history)
  }

  render() {
    const { history, deleteMeeting, meeting } = this.props
    const meetingId = meeting ? meeting.id : null
    return  <>
              <h1>In Edit Form Wrapper</h1>
              <MeetingForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteMeeting(meetingId, history)}>Delete this meeting</button>
            </>
  }
};

export default connect(null, { updateMeeting, setFormDataForEdit, resetMeetingForm, deleteMeeting })(EditMeetingFormWrapper);
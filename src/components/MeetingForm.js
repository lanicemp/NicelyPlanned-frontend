import React from 'react';
// 1.  VVV We first grab the action creator
import { updateMeetingForm } from '../actions/meetingForm'
import { connect } from 'react-redux'


const MeetingForm = ({ formData, updateMeetingForm, userId, meeting, handleSubmit, editMode }) => {
  

    const { title, start_time, end_time, date, detail, comment } = formData
  
    const handleChange = event => {
      console.log("trigger Handle change")
      const { name, value } = event.target
      // 4.  This is not an invocation of just the action creator,
      // it's now Redux dispatching the action built by the action
      // creator with the appropriate arguments
      updateMeetingForm(name, value)
    }

    return (
        <form onSubmit={event => {
          event.preventDefault()
          handleSubmit(formData)
        }}>
          <input
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={title}
          /><br/> 
          <input
          placeholder="detail"
          name="detail"
          onChange={handleChange}
          value={detail}
        /><br/>
         <input
            placeholder="date"
            name="date"
            onChange={handleChange}
            value={date}
          /><br/>
           <input
            placeholder="comment"
            name="comment"
            onChange={handleChange}
            value={comment}
          /><br/>
          <input
            placeholder="start time"
            name="start_time"
            onChange={handleChange}
            value={start_time}
          /><br/>
          <input
            placeholder="End Time "
            name="endTime "
            onChange={handleChange}
            value={end_time }
          /><br/>
          <input
            type="submit"
            value={editMode ? "Update Meeting" : "Create Meeting" }
          />
        </form>
    )};
    
    const mapStateToProps = state => {
      const userId = state.currentUser ? state.currentUser.id : ""
      return {
        formData: state.meetingForm,
        userId
      }
    }
    
    // 2.  We pass the action creator to redux's connect function
    // using either mapDispatchToProps or the shorthand object syntax seen below.
    export default connect(mapStateToProps, { updateMeetingForm })(MeetingForm);
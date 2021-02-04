import React from 'react';
// 1.  VVV We first grab the action creator
import { updateMeetingForm } from '../actions/meetingForm'
import { connect } from 'react-redux'


const MeetingForm = ({ formData, updateMeetingForm, userId, meeting, handleSubmit, editMode }) => {
  console.log("userId in meeting Form ", userId)
  //


    const  { title, start_time, end_time, date, detail, comment} = formData
  
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
          <label>
            Title:
          <input
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={title}
          /></label><br/> 
         <label> Detail:<input
          placeholder="detail"
          name="detail"
          onChange={handleChange}
          value={detail}
        /></label><br/>
         <label> Date:
         <input
            placeholder="date"
            name="date"
            type="date"
            onChange={handleChange}
            value={date}
          /></label><br/>
            <label> Comment:<input
            placeholder="comment"
            name="comment"
            onChange={handleChange}
            value={comment}
          /></label><br/>
          <label> Start Time: <input
            placeholder="start time"
            name="start_time"
            type="time"
            onChange={handleChange}
            value={start_time}
          /></label><br/>
          <label> End Time:<input
            placeholder="end time "
            name="end_time"
            type="time"
            onChange={handleChange}
            value={end_time}
          /></label><br/>
          <input 
          name="user_id"
          type="hidden"
          value={userId }
          />
          <input
            type="submit"
            value={editMode ? "Update Meeting" : "Create Meeting" }
          />
        </form>
    )};
    
    const mapStateToProps = state => {
      const userId = state.currentUser ? state.currentUser.id : ""
      console.log("set state userId", userId)
      return {
        formData: state.meetingForm,
        userId
      }
    }
    
    // 2.  We pass the action creator to redux's connect function
    // using either mapDispatchToProps or the shorthand object syntax seen below.
    export default connect(mapStateToProps, { updateMeetingForm })(MeetingForm);
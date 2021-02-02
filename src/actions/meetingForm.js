export const updateMeetingForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_MEETING_FORM",
      formData
    }
  }
  
  export const resetMeetingForm = () => {
    return {
      type: "RESET_NEW_MEETING_FORM",
    }
  }
  
  export const setFormDataForEdit = meeting => {
    const meetingFormData = {
      name: meeting.attributes.name,
      startDate: meeting.attributes.start_date,
      endDate: meeting.attributes.end_date
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      meetingFormData
    }
  }
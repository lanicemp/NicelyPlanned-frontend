const initialState = {
    title: "",
    start_time: "",
    end_time: "",
    date: "",
    detail: "",
    comment: "",


  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_MEETING_FORM":
        const returnVal = {
          ...state,
          [action.formData.name]: action.formData.value
        }
        return returnVal
      case "RESET_NEW_MEETING_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.meetingFormData
      default:
        return state
    }
  }
  
  
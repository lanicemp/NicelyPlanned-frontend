const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_MY_MEETINGS":
        return action.meetings
        case "ADD_MEETING":
          return state.concat(action.meeting)
          case "UPDATE_MEETING":
            return state.map(meeting => meeting.id === action.meeting.id ? action.meeting : meeting)
          case "DELETE_MEETING":
            //console.log( "action.meetingId is ", action.meetingId)
            return state.filter(meeting => meeting.id === action.meetingId ? false : true)
          case "CLEAR_MEETINGS":
            return initialState
      default:
        return state;
    }
  };
  
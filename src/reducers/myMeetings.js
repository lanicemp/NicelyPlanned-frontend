const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_MY_MEETINGS":
        return action.meetings
        case "ADD_MEETING":
          return state.concat(action.trip)
      default:
        return state;
    }
  };
  
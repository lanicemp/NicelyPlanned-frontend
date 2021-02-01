const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_MY_MEETINGS":
        return action.meetings
     
      default:
        return state;
    }
  };
  
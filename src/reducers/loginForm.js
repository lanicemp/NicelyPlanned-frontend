const initialState = {
    email: "lanice@gmail.com",
    password: "password"
}


export default (state = initialState, action) => {
    switch ((action.type)) {
        case "UPDATE_LOGIN_FORM":
            return action.user
      default:
        return state;
    }
  };
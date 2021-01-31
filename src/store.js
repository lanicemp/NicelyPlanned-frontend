import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import currentUser from "./reducers/currentUser";
import loginForm from "./reducers/loginForm";
import myMeetings from "./reducers/myMeetings";

const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  myMeetings,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

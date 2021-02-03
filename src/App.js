import React from "react";
import "./App.css";
import Login from './components/Login'
// import Logout from './components/Logout'
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import MainContainer from "./components/MainContainer";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import MeetingForm from './components/MeetingForm'
import {getMyMeetings} from './actions/myMeetings'
 import NewMeetingFormWrapper from './components/NewMeetingFormWrapper'
 import MyMeetings from './components/MyMeetings'
 import MeetingCard from './components/MeetingCard'

class App extends React.Component {
  componentDidMount() {
    console.log("in component did Mount");
    this.props.getCurrentUser();
   
  }

  render() {
    const { loggedIn, meetings } = this.props;

    return (
      <div className=" App">
        {loggedIn ? <NavBar meeting={this.props.meetings} /> : <Home />}
        <Switch>
          <Route exact path="/signup" render={({ history }) => <Signup history={history} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/meetings' component={MyMeetings}/>
          <Route exact path='/meetings/new' component={NewMeetingFormWrapper}/>
          <Route exact path='/meetings/:id' render={props => {
              // I need to get ???
              const meeting = meetings.find(meeting => meeting.id === props.match.params.id)
              console.log(meeting)
              return <MeetingCard meeting={meeting} {...props}/>
            }
          }/>
        </Switch>
        {loggedIn ? <MainContainer /> : ""}
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    loggedIn: !!state.currentUser,
    meetings: state.myMeetings
  });
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

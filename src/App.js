import React from "react";
import "./App.css";
import Login from "./components/Login";
// import Logout from './components/Logout'
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import {getMyMeetings} from "./actions/myMeetings" 
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import MainContainer from "./components/MainContainer";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import NewMeetingFormWrapper from "./components/NewMeetingFormWrapper";
import MeetingCard from "./components/MeetingCard";
import MyMeetings from "./components/MyMeetings"
import EditMeetingFormWrapper from "./components/EditMeetingFormWrapper";
// nicely-planned-client/src/components/MyMeetings.js

class App extends React.Component {
  componentDidMount() {
    console.log("in component did Mount");
    this.props.getCurrentUser();
   
    // this.props.getMyMeetings()
    // console.log(getMyMeetings())
  }

  render() {
    const { loggedIn, myMeetings } = this.props;
    console.log("meetings",  myMeetings);

    return (
      <div className=" App">
        {loggedIn ? <NavBar meeting={this.props.meetings} /> : <Home />}
        <Switch>
          <Route
            exact
            path="/signup"
            render={({ history }) => <Signup history={history} />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path='/meetings' component={MyMeetings}/>
          <Route exact path="/meetings/new" component={NewMeetingFormWrapper} />
          <Route exact path={`/meetings/:id/edit`} component={EditMeetingFormWrapper} />
          <Route
            exact
            path="/meetings/:id"
            render={(props) => {
              // I need to get ???
              console.log(props)
              console.log( myMeetings)
              const meeting = myMeetings.find(
                (meeting) => { console.log(meeting, props.match.params.id);
                  return meeting.id.toString() === props.match.params.id
              }
              );
              console.log( myMeetings);
              return <MeetingCard meeting={meeting} {...props} />;
            }}
          />
        </Switch>
        {loggedIn ? <MainContainer /> : ""}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    loggedIn: !!state.currentUser,
     myMeetings: state.myMeetings,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

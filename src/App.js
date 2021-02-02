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
import NewMeetingFormWrapper from './components/NewMeetingFormWrapper.js'

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
          <Route exact path='/meetings/new' component={NewMeetingFormWrapper}/>
        </Switch>
        {loggedIn ? <MainContainer /> : ""}
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

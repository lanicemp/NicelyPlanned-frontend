import React from 'react'
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import {connect} from 'react-redux'
import {getCurrentUser} from "./actions/currentUser"
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

componentDidMount(){
  console.log("in component did Mount")
  this.props.getCurrentUser()
  console.log(this.props)

}

  render(){
    return (
    this.props.currentUser ? <Logout/> : <Login/>
    );
  }
  
}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);

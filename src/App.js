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
 
}

  render(){
    const { loggedIn} = this.props
    
    return (
    
  loggedIn ? <Logout/> : <Login/>
    );
  }
  
}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

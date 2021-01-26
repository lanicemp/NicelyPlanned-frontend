import React from 'react'
import './App.css';
import Login from './components/Login'
import {connect} from 'react-redux'
import {getCurrentUser} from "./actions/currentUser"

class App extends React.Component {

componentDidMount(){
  console.log("in component did Mount")
  this.props.getCurrentUser()

}

  render(){
    return (
     <Login/>
    );
  }
  
}

export default connect(null, {getCurrentUser})(App);

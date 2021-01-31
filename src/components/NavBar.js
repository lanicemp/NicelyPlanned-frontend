import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn}) => {
  console.log("in navbar")
  console.log(currentUser)
    return (
      <div className="NavBar">
      { currentUser ? <h2> Welcome {currentUser.attributes.name}</h2>: ""}
      {currentUser ? <Logout/> : <Login/> }
    </div>
     
    )
  }
  const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

  export default connect(mapStateToProps)(NavBar)
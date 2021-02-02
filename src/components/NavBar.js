import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn}) => {
  console.log("in navbar")
  console.log(currentUser)
    return (
      <div className="NavBar">
         <NavLink exact activeClassName="active" to="/meetings"  >My Meetings</NavLink>
         <br></br>
      <NavLink exact activeClassName="active" to="/meetings/new" >New Meeting</NavLink>
      { loggedIn ? <><h2 id="loggedin">Welcome {currentUser.attributes.name}</h2><Logout/></> : null}
      
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
import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../actions/currentUser"
import { withRouter } from 'react-router-dom'


const Logout = ({ logout, history }) => {
  console.log("in logout")
    return (
      <form onSubmit={(event) => {
          event.preventDefault()
          logout()
          history.push('/')
        }
      }>
        <input type="submit" value="Log Out"/>
      </form>
    )
  }

  export default withRouter(connect(null, { logout } )(Logout))
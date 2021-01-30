import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../actions/currentUser"


const Logout = ({ logout, history }) => {
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

  export default connect(null, {logout})(Logout)
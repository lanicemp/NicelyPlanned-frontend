import React from "react";
import MyMeetings from "./MyMeetings";
import {connect} from 'react-redux'

const MainContainer = ({ currentUser, loggedIn}) => {
  return (
    <div className='MainContainer'>
      {loggedIn ? (
        <>
          <h2 id='loggedin'>Welcome {currentUser.attributes.name}</h2>
       
        </>
      ) : null}
      <p> Im in Main Container</p>

      <MyMeetings />
    </div>
  );
};
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps) (MainContainer);

import React from 'react'
import myMeetings from '../reducers/myMeetings'
import MyMeetings from './MyMeetings'


const MainContainer = () => {
  return (
    <div className="MainContainer">
     <p> Im in Main Container</p>
     <MyMeetings/>
    </div>
  )
}

export default MainContainer
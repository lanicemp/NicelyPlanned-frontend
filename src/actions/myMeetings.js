export const setMyMeetings = (meetings) => {
    return {
      type: "SET_MY_MEETINGS",
      meetings,
    };
  };






  //async actions 
  export const getMyMeetings = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/meetings", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyMeetings(response.data))
          }
        })
        .catch(console.log)
    }
  }

  export const createMeeting = (meetingData, history) => {
    return dispatch => {
      const sendableMeetingData = {
        start_time: meetingData.startDate,
        end_time: meetingData.endDate,
        title: meetingData.title,
        detail: meeftingData.detail,
        comment: meetingData.comment, 
        date: meetingData.date,
        user_id: meetingData.userId
      }
      return fetch("http://localhost:3000/api/v1/meetings", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableMeetingData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(addMeeting(resp.data))
            dispatch(resetMeetingForm())
            history.push(`/meetings/${resp.data.id}`)
            // go somewhere else --> meeting show?
            // add the new meeting to the store
          }
        })
        .catch(console.log)
  
    }
  }
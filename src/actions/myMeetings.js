import {resetMeetingForm} from './meetingForm'



export const setMyMeetings = (meetings) => {
  console.log("setMyMeetings", meetings)
  return {
    type: "SET_MY_MEETINGS",
    meetings,
  };
};

export const clearMeetings = () => {
  return {
    type: "CLEAR_MEETINGS",
  };
};

export const addMeeting = (meeting) => {
  return {
    type: "ADD_MEETING",
    meeting,
  };
};
export const deleteMeetingSuccess = (meetingId) => {
  return {
    type: "DELETE_MEETING",
    meetingId,
  };
};

export const updateMeetingSuccess = (meeting) => {
  return {
    type: "UPDATE_MEETING",
    meeting,
  };
};

//async actions
export const getMyMeetings = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/meetings", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        // debugger
        console.log({response})
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setMyMeetings(response));
          //send the 
        }
      })
      .catch(console.log);
  };
};

export const createMeeting = (meetingData, history) => {
  return (dispatch) => {
    console.log("meetingData", meetingData)
    const sendableMeetingData = {
      start_time: meetingData.start_time,
      end_time: meetingData.end_time,
      title: meetingData.title,
      detail: meetingData.detail,
      comment: meetingData.comment,
      date: meetingData.date,
      user_id: meetingData.userId,
    };
    console.log("sendableMeetingDatata", sendableMeetingData)
    return fetch("http://localhost:3000/api/v1/meetings", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendableMeetingData),
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(addMeeting(resp.data));
          console.log("resp.data", resp.data)
          dispatch(resetMeetingForm());
          history.push(`/meetings/${resp.data.id}`);
          // go somewhere else --> meeting show?
          // add the new meeting to the store
        }
      })
      .catch(console.log);
  };
};
export const updateMeeting = (meetingData, history) => {
  return dispatch => {
    const sendableMeetingData = {
      start_time: meetingData.start_time,
      end_time: meetingData.end_time,
      title: meetingData.title,
      detail: meetingData.detail,
      comment: meetingData.comment,
      date: meetingData.date,
      user_id: meetingData.userId,
    }
    return fetch(`http://localhost:3000/api/v1/meetings/${meetingData.meetingId}`, {
      credentials: "include",
      method: "PATCH",
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
          dispatch(updateMeetingSuccess(resp.data))
          history.push(`/meetings/${resp.data.id}`)
          // go somewhere else --> meeting show?
          // add the new meeting to the store
        }
      })
      .catch(console.log)

  }
}

export const deleteMeeting = (meetingId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/meetings/${meetingId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteMeetingSuccess(meetingId))
          history.push(`/meetings`)
          // go somewhere else --> meeting show?
          // add the new meeting to the store
        }
      })
      .catch(console.log)

  }
}
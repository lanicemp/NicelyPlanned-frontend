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
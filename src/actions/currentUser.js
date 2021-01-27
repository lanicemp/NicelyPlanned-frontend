//synchronous action creators
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

//asynchoronus action creators

export const login = (credentials, history) => {
  console.log("credentials are", credentials)
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials:"include",
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then( response => {
      if (response.error){
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
      }
    })
    .catch(console.log)
  };
};
// This returns a function that retuns a fecth that I can dispatch as I see fit. 

export const getCurrentUser = () => {
  console.log("in action creator getCurrentUser")
  console.log("DISPATCHING GET CURRENT USER")
  
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(r => r.json())
    .then( response => {
      if (response.error){
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))}
    })
    .catch(console.log)
  };
};
//synchronous action creators
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

//asynchoronus action creators

export const login = (credentials) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email:"lanicemp")
    });
  };
};
// This returns a function that retuns a fecth that I can dispatch as I see fit. 
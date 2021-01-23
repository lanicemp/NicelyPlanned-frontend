//action creators points to a function that returns an action. 
export const updateLoginForm = FormData => {
    return{
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}
import React from 'react'
import { connect } from 'react-redux'
import { signup } from "../actions/currentUser.js"
import { updateSignupForm } from "../actions/signupForm.js"

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

    const handleUserInfoInputChange = event => {
      const { name, value } = event.target
      const updatedFormInfo = {
        ...signupFormData,
        [name]: value
      }
      updateSignupForm(updatedFormInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
      }
      return (
        <div className="Signup">
          <h2> Sign Up Below </h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleUserInfoInputChange} />
          <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
          <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
         <input type="submit" value="Sign Up"/>
        </form>
        </div>
      )
    }
    const mapStateToProps = state => {
        return {
          signupFormData: state.signupForm
        }
      }
      
      export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
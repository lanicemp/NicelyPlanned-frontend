import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";

const Login = ({ loginForm, updateLoginForm }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginForm, 
      [name]: value
    };
    updateLoginForm(updatedFormInfo)
  };

  return (
    <form onSubmit={null}>
      <input
        placeholder="email"
        value={loginForm.email}
        name="email"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="password"
        value={loginForm.password}
        name="password"
        type="text"
        onChange={handleInputChange}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

//mapStateToProps noting is happening.  Were taking state from redux.
//Taking specific state from the store.
const mapStateToProps = (state) => {
  return {
 loginForm : state.loginForm
  };
};

//Connect is a function that takes up to four arguments and returns
//  a function that takes a compnent and returns a component
export default connect(mapStateToProps, {updateLoginForm})(Login);

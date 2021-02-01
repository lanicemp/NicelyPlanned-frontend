import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history);
  };

  return (
    <div>
      <h2> Welcome</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          value={loginFormData.email}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="password"
          value={loginFormData.password}
          name="password"
          type="text"
          onChange={handleInputChange}
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

//mapStateToProps noting is happening.  Were taking state from redux.
//Taking specific state from the store.
const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

//Connect is a function that takes up to four arguments and returns
//  a function that takes a compnent and returns a component
export default connect(mapStateToProps, { updateLoginForm, login })(Login);

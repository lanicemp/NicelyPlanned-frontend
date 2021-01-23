import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";

const Login = ({ email, password, updateLoginForm }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      name,
      value,
    };
    updateLoginForm(updatedFormInfo)
  };

  return (
    <form onSubmit={undefined}>
      <input
        placeholder="email"
        value={email}
        name="email"
        type="text"
        onChange={updateLoginForm}
      />
      <input
        placeholder="password"
        value={password}
        name="password"
        type="text"
        onChange={updateLoginForm}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

//mapStateToProps noting is happening.  Were taking state from redux.
//Taking specific state from the store.
const mapStateToProps = (state) => {
  return {
    email: state.loginForm.username,
    password: state.loginForm.password,
  };
};

//Connect is a function that takes up to four arguments and returns
//  a function that takes a compnent and returns a component
export default connect(mapStateToProps)(Login);

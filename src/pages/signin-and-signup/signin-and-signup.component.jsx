import React from "react";
import PropTypes from "prop-types";
import "./signin-and-signup.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
const SigninAndSignup = (props) => {
  return (
    <div className="sign-in-and-sign-up">
      SIGN IN
      <SignIn />
    </div>
  );
};

SigninAndSignup.propTypes = {};

export default SigninAndSignup;

import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpPageContainer } from "./signin-and-signup.styles";
const SigninAndSignup = (props) => {
  return (
    <SignInAndSignUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpPageContainer>
  );
};

export default SigninAndSignup;

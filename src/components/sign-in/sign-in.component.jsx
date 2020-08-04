import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import { ButtonsContainer, SignInContainer } from "./sign-in.styles";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    let { email, password } = this.state;
    event.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      createUserProfileDocument(user);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>SIgn in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <ButtonsContainer>
            <CustomButton name="submit" type="submit">
              Sign in
            </CustomButton>
            <CustomButton
              name="submit"
              isGoogleSignin
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
export default class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    console.clear();
    console.log(name, value);
    this.setState({ [name]: value });
  };
  render() {
    let { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your e-mail and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            label="display name"
            value={displayName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="email"
            label="email"
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />
          <CustomButton name="submit" onClick={this.signInWithGoogle}>
            Create account
          </CustomButton>
        </form>
      </div>
    );
  }
}

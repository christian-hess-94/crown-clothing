import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custon-button/custom-button.component";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
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
          <CustomButton name="submit" type="submit">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}

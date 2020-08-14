import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { ButtonsContainer, SignInContainer } from "./sign-in.styles";
import { connect } from "react-redux";
import {
    googleSignInStart,
    emailSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends Component {
    state = {
        email: "christianhess94@gmail.com",
        password: "12345678",
    };

    handleSubmit = async (event) => {
        let { email, password } = this.state;
        const { emailSignInStart } = this.props;
        event.preventDefault();
        emailSignInStart(email, password);
    };

    handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        this.setState({ [name]: value });
    };
    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

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
                            type="button"
                            name="submit"
                            isGoogleSignin
                            onClick={googleSignInStart}
                        >
                            Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);

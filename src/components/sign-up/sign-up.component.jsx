import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer } from "./sign-up.styles";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
class SignUp extends Component {
    state = {
        displayName: "Christian",
        email: "christianhess94@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;
        signUpStart({ ...this.state });
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
            <SignUpContainer>
                <h2>I do not have an account</h2>
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
                        type="email"
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
            </SignUpContainer>
        );
    }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userObject) => dispatch(signUpStart(userObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

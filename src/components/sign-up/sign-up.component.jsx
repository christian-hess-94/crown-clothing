import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer } from "./sign-up.styles";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpStart({ ...userCredentials });
    };

    const handleChange = ({ target: { name, value } }) => {
        setUserCredentials({ ...userCredentials, [name]: value });
    };
    return (
        <SignUpContainer>
            <h2>I do not have an account</h2>
            <span>Sign up with your e-mail and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    label="display name"
                    value={displayName}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value={email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value={password}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="confirm password"
                    value={confirmPassword}
                    required
                    handleChange={handleChange}
                />
                <CustomButton name="submit">Create account</CustomButton>
            </form>
        </SignUpContainer>
    );
};
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userObject) => dispatch(signUpStart(userObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { ButtonsContainer, SignInContainer } from "./sign-in.styles";
import { useSelector, useDispatch } from "react-redux";
import {
    googleSignInStart,
    emailSignInStart,
} from "../../redux/user/user.actions";
import { selectUserSignInError } from "../../redux/user/user.selector";

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: "christianhess94@gmail.com",
        password: "12345678",
    });
    const error = useSelector(selectUserSignInError);
    const { email, password } = userCredentials;
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(emailSignInStart(userCredentials));
    };

    const handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    required
                    onChange={handleChange}
                />
                <span>{error?.message}</span>
                <ButtonsContainer>
                    <CustomButton name="submit" type="submit">
                        Sign in
                    </CustomButton>
                    <CustomButton
                        type="button"
                        name="submit"
                        isGoogleSignin
                        onClick={() => dispatch(googleSignInStart())}
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};
export default SignIn;

import styled, { css } from "styled-components";

//Function to detec passed props and render specific styles
const getButtonStyles = (props) => {
  if (props.isGoogleSignin) {
    return googleSignInButtonStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

//Specific styles for normal button
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

//Specific styles for inverted button
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

//Specific styles for Google Sign In button
const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: 0px;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: 0px;
  }
`;

//Base styles common to all buttons
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

import React from "react";
import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";
const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <FormGroupContainer>
      <FormInputContainer onChange={handleChange} {...otherprops} />
      {label && (
        <FormInputLabel
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label.toUpperCase()}
        </FormInputLabel>
      )}
    </FormGroupContainer>
  );
};

export default FormInput;

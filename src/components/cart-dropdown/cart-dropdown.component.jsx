import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
export default class CartDowndown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}
import React from "react";
import PropTypes from "prop-types";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <span className="price">${price * quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {};

export default CheckoutItem;

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  removeItemFromCart,
  addItem,
  decreaseItem,
} from "../../redux/cart/cart.actions";
const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  addItem,
  decreaseItem,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      {" "}
      a
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          {quantity > 1 ? <>&#10094;</> : <>&#10005; </>}
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="price">${price * quantity}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  decreaseItem: (cartItem) => dispatch(decreaseItem(cartItem)),
  removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
});

CheckoutItem.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);

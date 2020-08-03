import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Total</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">
            <span>TOTAL: ${cartTotal}</span>
          </div>
        </>
      ) : (
        <span>No items added into the cart</span>
      )}
      <div className="test-warning">
        Test card for payment:
        <br />
        Number: 4242 4242 4242 4242
        <br /> Expire date: any month / year combination in the future
        <br />
        CVC: Any three numbers
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
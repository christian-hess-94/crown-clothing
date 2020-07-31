import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

export const CartDropdown = ({
  cartItems = [],
  cartItemsCount,
  history,
  hidden,
  toggleCartHidden,
}) => {
  const openCheckoutPage = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} />)
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton onClick={openCheckoutPage}>
        GO TO CHECKOUT ({cartItemsCount})
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

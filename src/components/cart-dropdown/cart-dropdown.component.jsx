import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartHidden,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageText,
} from "./cart-dropdown.styles";

export const CartDropdown = ({
  cartItems = [],
  cartTotal,
  history,
  hidden,
  toggleCartHidden,
}) => {
  const openCheckoutPage = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageText>YOUR CART IS EMPTY</EmptyMessageText>
        )}
      </CartItemsContainer>
      TOTAL: ${cartTotal}
      <CustomButton onClick={openCheckoutPage}>GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  hidden: selectCartHidden,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

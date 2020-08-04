import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  TestWarningText,
  TotalText,
} from "./checkout.styles";
const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutPageHeader>
        <CheckoutPageHeaderBlock>Product</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Description</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Quantity</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Price</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Total</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Remove</CheckoutPageHeaderBlock>
      </CheckoutPageHeader>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <TotalText>TOTAL: ${cartTotal}</TotalText>
        </>
      ) : (
        <span>No items added into the cart</span>
      )}
      <TestWarningText>
        Test card for payment:
        <br />
        Number: 4242 4242 4242 4242
        <br /> Expire date: any month / year combination in the future
        <br />
        CVC: Any three numbers
      </TestWarningText>
      <StripeButton price={cartTotal} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

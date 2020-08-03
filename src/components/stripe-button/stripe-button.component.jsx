import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { publishableKey } from "./stripe.key";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    alert(token);
  };
  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is USD - $${price}`}
      amount={priceForStripe}
      panelLabe="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;

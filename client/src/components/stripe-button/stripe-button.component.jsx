import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { publishableKey } from "./stripe.key";
import axios from "axios";
const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const onToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((res) => alert("Payment Successful"))
            .catch((err) => {
                alert(
                    "There was an issue with your payment. Please use the provided credit card"
                );
                console.log("Payment error: ", JSON.stringify(err));
            });
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

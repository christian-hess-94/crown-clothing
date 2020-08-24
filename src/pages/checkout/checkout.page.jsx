import React from "react";
import { useSelector } from "react-redux";
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
const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
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
            {!!cartTotal && <StripeButton price={cartTotal} />}
        </CheckoutPageContainer>
    );
};

export default CheckoutPage;

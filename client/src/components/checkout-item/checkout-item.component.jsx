import React from "react";
import { useDispatch } from "react-redux";
import {
    removeItemFromCart,
    addItem,
    decreaseItem,
} from "../../redux/cart/cart.actions";
import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemImage,
    Description,
    QuantityDescription,
    QuantityArrow,
    RemoveButton,
} from "./checkout-item.styles";
const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const dispatch = useDispatch();

    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt={name} />
            </CheckoutItemImageContainer>
            <Description>{name}</Description>
            <QuantityDescription>
                <QuantityArrow onClick={() => dispatch(decreaseItem(cartItem))}>
                    {quantity > 1 ? <>&#10094;</> : <>&#10005; </>}
                </QuantityArrow>
                <span>{quantity}</span>
                <QuantityArrow onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </QuantityArrow>
            </QuantityDescription>
            <Description>${price}</Description>
            <Description>${price * quantity}</Description>
            <RemoveButton
                onClick={() => dispatch(removeItemFromCart(cartItem))}
            >
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;

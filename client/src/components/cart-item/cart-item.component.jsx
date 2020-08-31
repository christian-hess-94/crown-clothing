import React from "react";
import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    DescriptionText,
} from "./cart-item.styles";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <DescriptionText>{name}</DescriptionText>
                <DescriptionText>
                    {quantity} x ${price}
                </DescriptionText>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
};
//Memoização por conta de multiplos re-render na lista do CartDropdown
export default React.memo(CartItem);

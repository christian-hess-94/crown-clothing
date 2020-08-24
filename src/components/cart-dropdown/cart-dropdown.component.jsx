import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useHistory } from "react-router-dom";
import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
    CartDropDownContainer,
    CartItemsContainer,
    EmptyMessageText,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
    const history = useHistory();

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const dispatch = useDispatch();

    const openCheckoutPage = () => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
    };

    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <EmptyMessageText>YOUR CART IS EMPTY</EmptyMessageText>
                )}
            </CartItemsContainer>
            TOTAL: ${cartTotal}
            <CustomButton onClick={openCheckoutPage}>
                GO TO CHECKOUT
            </CustomButton>
        </CartDropDownContainer>
    );
};

export default CartDropdown;

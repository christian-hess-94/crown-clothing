import React from "react";
import { connect } from "react-redux";
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
const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  addItem,
  decreaseItem,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt={name} />
      </CheckoutItemImageContainer>
      <Description>{name}</Description>
      <QuantityDescription>
        <QuantityArrow onClick={() => decreaseItem(cartItem)}>
          {quantity > 1 ? <>&#10094;</> : <>&#10005; </>}
        </QuantityArrow>
        <span>{quantity}</span>
        <QuantityArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrow>
      </QuantityDescription>
      <Description>${price}</Description>
      <Description>${price * quantity}</Description>
      <RemoveButton onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  decreaseItem: (cartItem) => dispatch(decreaseItem(cartItem)),
  removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
});

CheckoutItem.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);

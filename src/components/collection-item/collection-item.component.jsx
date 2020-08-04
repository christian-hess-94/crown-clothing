import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  AddButton,
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemFooterContainer,
  NameText,
  PriceText,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { /* id, */ name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage className="image" imageUrl={imageUrl} />
      <CollectionItemFooterContainer>
        <NameText>{name}</NameText>
        <PriceText>${price}</PriceText>
      </CollectionItemFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

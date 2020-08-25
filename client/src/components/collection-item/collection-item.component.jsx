import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
    AddButton,
    CollectionItemContainer,
    CollectionItemImage,
    CollectionItemFooterContainer,
    NameText,
    PriceText,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
    const { /* id, */ name, price, imageUrl } = item;
    const dispatch = useDispatch();
    return (
        <CollectionItemContainer>
            <CollectionItemImage className="image" imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <NameText>{name}</NameText>
                <PriceText>${price}</PriceText>
            </CollectionItemFooterContainer>
            <AddButton inverted onClick={() => dispatch(addItem(item))}>
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;

import React from "react";
import { connect, useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
    CollectionPageContainer,
    CollectionPageTitle,
    ItemsGrid,
} from "./collection.styles";

const CollectionPage = ({ match }) => {
    const collection = useSelector(selectCollection(match.params.collectionId));
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <ItemsGrid>
                {items.map((item) => (
                    <CollectionItem
                        className="collection-item"
                        key={item.id}
                        item={item}
                    />
                ))}
            </ItemsGrid>
        </CollectionPageContainer>
    );
};

export default CollectionPage;

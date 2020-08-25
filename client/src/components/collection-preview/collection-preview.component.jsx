import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from "./collection-preview.styles";
import { withRouter } from "react-router-dom";
const CollectionPreview = ({ match, title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle to={`${match.path}/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);

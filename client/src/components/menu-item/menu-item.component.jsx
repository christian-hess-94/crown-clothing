import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  MenuItemImage,
  MenuItemContentContainer,
  MenuItemTitleText,
  MenuItemSubtitleText,
} from "./menu-item.styles";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer
    className={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemImage className="background-image" imageUrl={imageUrl} />
    <MenuItemContentContainer className="content">
      <MenuItemTitleText>{title.toUpperCase()}</MenuItemTitleText>
      <MenuItemSubtitleText>SHOP NOW</MenuItemSubtitleText>
    </MenuItemContentContainer>
  </MenuItemContainer>
);

MenuItem.propTypes = {
  title: PropTypes.string,
};

export default withRouter(MenuItem);

// import React, { Component } from "react";
// import "./shop.styles.scss";
// import SHOP_DATA from "./shop.data";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// export default class ShopPage extends Component {
//   state = {
//     collections: SHOP_DATA,
//   };
//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherProps }) => (
//           <CollectionPreview key={id} {...otherProps} />
//         ))}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
export const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

ShopPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

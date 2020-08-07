import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetcing,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import {
  fetchCollectionsStartAsync,
  fetchCollectionsStart,
} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync, fetchCollectionsStart } = this.props;
    // fetchCollectionsStartAsync();
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

//Redux-thunk passa o dispatch como o primeiro parametro de fetchCollectionsStartAsync
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

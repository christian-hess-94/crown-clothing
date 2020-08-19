import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

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
};

const mapStateToProps = createStructuredSelector({});

//Redux-thunk passa o dispatch como o primeiro parametro de fetchCollectionsStartAsync
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
    // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

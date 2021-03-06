import memoize from 'lodash.memoize';
const { createSelector } = require("reselect");
const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
))

export const selectIsCollectionFetcing = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
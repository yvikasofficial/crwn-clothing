const { createSelector } = require("reselect");

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.shopItems
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParm) =>
  createSelector(
    [selectShopItems],
    (collections) => collections[collectionUrlParm]
  );

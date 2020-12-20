import React from "react";

import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapPropsToState = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapPropsToState)(CollectionOverview);

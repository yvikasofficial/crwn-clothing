import React from "react";
import { Route, withRouter } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default withRouter(ShopPage);

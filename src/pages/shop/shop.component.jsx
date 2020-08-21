import React from "react";
import CollectionOverview from "../../components/collection-overview/conllection-overview.jsx";
import { connect } from "react-redux";
import {
  fireStore,
  converCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  shopUpdates,
  fetchCollectionsStartAsync,
} from "../../redux/actions/index.js";
import WithSpinner from "../../components/spinner/with-spinner.component.jsx";
import { Route } from "react-router-dom";
import Category from "../category/category.component";
import Tes from "./Tes.jsx";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    const { fetchCollectionsStartAsync } = this.props;
    // this.state = { isLoading: true };
    fetchCollectionsStartAsync();
  }
  // unsubscribeFromSnapshot = null;
  componentDidMount() {
    // const collectionRef = fireStore.collection("collections");
    // collectionRef.get().then(async (snapshot) => {
    //   const collectionMap = converCollectionSnapshotToMap(snapshot);
    //   this.props.shopUpdates(collectionMap);
    //   this.setState({
    //     isLoading: false,
    //   });
    // });
    console.log(this.props.isLoading);
  }
  render() {
    const { isLoading } = this.props;

    const CollectionOverViewHOC = WithSpinner(Tes);
    const CollectionItemsHOC = WithSpinner(Category);
    return (
      <div>
        <Route
          path={`${this.props.match.path}`}
          render={(props) => (
            <CollectionOverViewHOC isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${this.props.match.path}/:categoryId`}
          render={(props) => (
            <CollectionItemsHOC isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shopData: state.shop,
    isLoading: state.shop.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // shopUpdates: (collectionsMap) => dispatch(shopUpdates(collectionsMap)),
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

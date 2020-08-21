import {
  fireStore,
  converCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import * as types from "../../constants/types";
export const currentUser = (user) => {
  return {
    type: types.CURRENT_USER,
    user,
  };
};

export const logOutUser = (user) => {
  return {
    type: types.LOGOUT_USER,
  };
};

export const toggleDropdown = () => {
  return {
    type: types.TOGGLE_DROPDOWN,
  };
};

export const addToCart = (item) => {
  return {
    type: types.ADD_TO_CART,
    item,
  };
};
export const removeSelectedItem = (id) => {
  return {
    type: types.REMOVE_SELECTED_ITEM,
    id,
  };
};
export const decreaseItemFromCart = (id) => {
  return {
    type: types.DECREASE_ITEM_FROM_CART,
    id,
  };
};

export const shopUpdates = (items) => {
  return {
    type: types.SHOP_UPDATES,
    payload: items,
  };
};

export const fetchCollectionsStart = () => {
  return {
    type: types.FETCH_COLLECTIONS_START,
  };
};
export const fetchCollectionsSuccess = (items) => {
  return {
    type: types.FETCH_COLLECTIONS_SUCCESS,
    payload: items,
  };
};
export const fetchCollectionsError = (error) => {
  return {
    type: types.FETCH_COLLECTIONS_FAILURE,
    payload: error,
  };
};
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = fireStore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionMap = converCollectionSnapshotToMap(snapshot);
        // this.props.shopUpdates(collectionMap);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((err) => {
        dispatch(fetchCollectionsError(err));
      });
  };
};

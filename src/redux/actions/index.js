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

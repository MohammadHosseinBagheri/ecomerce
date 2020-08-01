import {
  decreaseFromCart,
  removeSelectedItem,
  addedToCart,
} from "./cart/cart.utils";
const {
  TOGGLE_DROPDOWN,
  ADD_TO_CART,
  REMOVE_SELECTED_ITEM,
  DECREASE_ITEM_FROM_CART,
} = require("../../constants/types");
const INITIAL_STATE = {
  hidden: true,
  addedItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      // console.log(state);
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_TO_CART:
      return {
        ...state,
        // addedItems: [...state.addedItems, action.item],
        addedItems: addedToCart(state.addedItems, action.item),
      };
    case REMOVE_SELECTED_ITEM:
      return {
        ...state,
        addedItems: removeSelectedItem(state.addedItems, action.id),
      };
    case DECREASE_ITEM_FROM_CART:
      return {
        ...state,
        addedItems: decreaseFromCart(state.addedItems, action.id),
      };
    default:
      return state;
  }
};
export default cartReducer;

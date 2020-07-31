import addedToCart from "./cart/cart.utils";
const { TOGGLE_DROPDOWN, ADD_TO_CART } = require("../../constants/types");
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
    default:
      return state;
  }
};
export default cartReducer;

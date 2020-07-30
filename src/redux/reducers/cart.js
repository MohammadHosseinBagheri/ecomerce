const { TOGGLE_DROPDOWN } = require("../../constants/types");

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      console.log(state);
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
export default cartReducer;

const { CURRENT_USER } = require("../../constants/types");

const userReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.user

    default:
      return state;
  }
};
export default userReducer;

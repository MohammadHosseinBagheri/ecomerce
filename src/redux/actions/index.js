import * as types from "../../constants/types";
export const currentUser = (user) => {
  return {
    type: types.CURRENT_USER,
    user,
  };
};
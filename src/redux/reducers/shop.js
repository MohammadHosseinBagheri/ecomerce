import {
  SHOP_UPDATES,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "../../constants/types";

const INITIALSTATE = {
  collections: null,
  message: undefined,
  isFetching: false,
};
const shopReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };
    // case SHOP_UPDATES: {
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };
    // }
    default:
      return state;
  }
};

export default shopReducer;

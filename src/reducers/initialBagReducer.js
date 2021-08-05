import {
  FETCH_CATS_ERROR,
  FETCH_CATS_PENDING,
  FETCH_CATS_SUCCESS,
} from "../constants";

export const InitialbagReducer = (
  state = { error: false, cats: [], isPending: false },
  action
) => {
  switch (action.type) {
    case FETCH_CATS_ERROR:
      return {
        cats: [],
        isPending: false,
        error: true,
      };
//       break;

    case FETCH_CATS_SUCCESS:
      return {
        cats: action.cats,
        isPending: false,
        error: false,
      };
//       break;

    case FETCH_CATS_PENDING:
      return {
        cats: [],
        isPending: true,
        error: false,
      };

    default:
      return state;
//       break;
  }
};

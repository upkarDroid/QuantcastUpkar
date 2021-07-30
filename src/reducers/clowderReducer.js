import { ADD_CLOWDER } from "../constants";

const ClowderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CLOWDER:
      return [...state, action.clowder];
      break;
    default:
      return [...state];
  }
};
export default ClowderReducer;

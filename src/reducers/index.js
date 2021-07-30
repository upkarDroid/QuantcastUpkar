import { combineReducers } from "redux";
import { InitialbagReducer } from "./initialBagReducer";
import ClowderReducer from "./clowderReducer";

export default combineReducers({
  initialbag: InitialbagReducer,
  clowder: ClowderReducer,
});

import { ADD_CLOWDER } from "../constants";

const addClowder = (clowder) => {
  return {
    type: ADD_CLOWDER,
    clowder,
  };
};

export default addClowder;

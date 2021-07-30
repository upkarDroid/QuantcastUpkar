import {
  FETCH_CATS_ERROR,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_PENDING,
} from "../constants";

export const fetchCatsSuccess = (cats) => {
  return {
    type: FETCH_CATS_SUCCESS,
    cats,
  };
};

export const fetchCatsError = (error) => {
  return {
    type: FETCH_CATS_ERROR,
    error,
  };
};

export const fetchCats = () => ({
  type: FETCH_CATS_PENDING,
});

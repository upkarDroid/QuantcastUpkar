export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const FETCH_CATS_PENDING = "FETCH_CATS_PENDING";
export const FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS";
export const FETCH_CATS_ERROR = "FETCH_CATS_ERROR";
export const SHOW_NEXT_RESULT_PAGE = "SHOW_NEXT_RESULT_PAGE";
export const CLOWDER_SIZE = 3;
export const ADD_CLOWDER = "ADD_CLOWDER";

export const API_BASE_URL = "http://quantcats.herokuapp.com/";
export const API_FILL_BAG = `${API_BASE_URL}bag`;
export const GET_VALIDATE_CLOWDER_URL = (cat1, cat2, cat3) =>
  `${API_BASE_URL}clowder?cat=${cat1}&cat=${cat2}&cat=${cat3}`;

export const IMG_BASE_URL = "http://quantcats.herokuapp.com/static/cats/";
export const getIdFromCat = (cat) => cat.reduce((a, b) => `${a}${b}`);

export const VALID_SUCCESS_MESSAGE = "Congratulation! The cats get Along";
export const VALID_ERROR_MESSAGE = "NOOOO!!! The Cats do not get along";
export const ALREADY_IN_CLOWDER_MESSAGE =
  "These 3 cats are already added as clowder, Please change your selection";

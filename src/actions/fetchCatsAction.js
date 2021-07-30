// import { fetch } from "whatwg-fetch";
import { fetchCats, fetchCatsError, fetchCatsSuccess } from "./results";
import { API_FILL_BAG } from "../constants";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => {
  return response.json();
};

const fetchCatsAction = (searchTerm) => {
  return (dispatch) => {
    // dispatch(isFetchingAction(true));
    dispatch(fetchCats());

    fetch(API_FILL_BAG, {
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => {
        Array.isArray(response.cats) && response.cats.length > 0
          ? dispatch(fetchCatsSuccess(response.cats))
          : dispatch(fetchCatsError());
      })
      .catch((error) => {
        dispatch(fetchCatsError());
      });
  };
};
export default fetchCatsAction;

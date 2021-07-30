import React, { useState, useEffect, useCallback } from "react";
import {
  getIdFromCat,
  CLOWDER_SIZE,
  GET_VALIDATE_CLOWDER_URL,
  VALID_ERROR_MESSAGE,
  VALID_SUCCESS_MESSAGE,
  ALREADY_IN_CLOWDER_MESSAGE,
} from "../../constants";
import CatItem from "./CatItem";
import AlertBox from "../AlertBox";

const CatGrid = ({ cats, addToClowder, clowder, alert }) => {
  const [selectedCats, setSelectedCats] = useState([]);
  const validateAndPushSelectedCats = useCallback(async () => {
    const cats = [...selectedCats];
    //clear the selection
    setSelectedCats([]);
    //check if ids already exist in state
    const result = clowder.find(
      (cl) => cl.sort().join("") === cats.sort().join("")
    );

    if (typeof result === "undefined") {
      const url = GET_VALIDATE_CLOWDER_URL(...cats);
      // const url = 'http://quantcats.herokuapp.com/clowder?cat=1ttg&cat=2wsb&cat=3brr';
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      const { valid = false } = data;

      if (valid) {
        AlertBox({
          title: "Congratulations!",
          message: VALID_SUCCESS_MESSAGE,
          handleClick: () => {
            addToClowder(cats);
          },
        });
      } else {
        AlertBox({
          title: "OH NOOO!",
          message: VALID_ERROR_MESSAGE,
          handleClick: () => {},
        });
      }
    } else {
      //show message : this clowder is already added
      // window.confirm(
      //   "These 3 cats are already added as clowder, Please change your selection"
      // );

      AlertBox({
        title: "Already In Clowder",
        message: ALREADY_IN_CLOWDER_MESSAGE,

        handleClick: () => {},
      });
    }
  }, [addToClowder, clowder, selectedCats]);

  useEffect(() => {
    selectedCats.length &&
      selectedCats.length === CLOWDER_SIZE &&
      validateAndPushSelectedCats();
  }, [alert, selectedCats, validateAndPushSelectedCats]);

  const selectCat = (catId) => {
    if (selectedCats.includes(catId)) {
      //already selected , remove it from state
      setSelectedCats(selectedCats.filter((cat) => cat !== catId));
    } else {
      //not yet selected , add it to state
      setSelectedCats([...selectedCats, catId]);
    }
  };

  return (
    <div className="cat-grid">
      {cats.map((cat, index) => (
        <CatItem
          key={`cat-${index}`}
          cat={cat}
          class="grid-item"
          selectCat={selectCat}
          s
          selected={selectedCats.includes(getIdFromCat(cat))}
        />
      ))}
    </div>
  );
};

export default CatGrid;

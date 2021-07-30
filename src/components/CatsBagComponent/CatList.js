import React, { useEffect } from "react";
import CatGrid from "./CatGrid";
import "./Catbag.css";

const CatList = (props) => {
  const { cats = [], fetchCats } = props;

  useEffect(() => {
    if (cats.length === 0) {
      fetchCats();
    }
  }, [cats.length, fetchCats]);

  return cats.length ? (
    <CatGrid {...props} />
  ) : (
    <button onClick={fetchCats}>fill Bag</button>
  );
};

export default CatList;

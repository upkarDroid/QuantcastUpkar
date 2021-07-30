import React from "react";
import Spinner from "../Spinner";
import CatList from "./CatList";
import "./Catbag.css";

const CatsBagComponent = (props) => {
  const { isPending = false } = props;

  return isPending ? <Spinner /> : <CatList {...props} />;
};
export default CatsBagComponent;

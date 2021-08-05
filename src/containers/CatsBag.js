import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import SearchResultsComponent from "../components/SearchResults/SearchResults";
import CatsBagComponent from "../components/CatsBagComponent";
import fetchCatsAction from "../actions/fetchCatsAction";
import addClowder from "../actions/clowderAction";

const mapStateToProps = ({ initialbag, clowder }) => {
  const { cats = [], isPending = false, error = false } = initialbag;
  return { cats, isPending, error, clowder };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCats: fetchCatsAction,
      addToClowder: addClowder,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CatsBagComponent);

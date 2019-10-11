import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfData from "./SmurfData";
import { fetchData } from "../actions";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Smurf Village...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(item => (
        <SmurfData key={item.id} item={item} />
      ))}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(Smurfs);
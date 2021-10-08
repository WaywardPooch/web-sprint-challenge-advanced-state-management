import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const SmurfList = (props) => {
  const { smurfArray, isLoading, fetchError } = props;

  if (fetchError.length > 0) {
    return <h1>Error! Could not load the list...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {smurfArray.map((smurf) => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfArray: state.smurfList,
    isLoading: state.isLoading,
    fetchError: state.fetchError,
  };
};

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.

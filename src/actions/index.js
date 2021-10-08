// Libraries
import axios from "axios";

// Constants
export const FETCH_INIT = "FETCH_INIT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// Simple actions
export const startFetch = () => {
  return { type: FETCH_INIT };
};
export const updateSmurfs = (newSmurfs) => {
  return { type: FETCH_SUCCESS, payload: newSmurfs };
};
export const showError = (error) => {
  return { type: FETCH_FAILURE, payload: error };
};

// Complex actions
export const getSmurfs = () => {
  return (dispatch) => {
    dispatch(startFetch());
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

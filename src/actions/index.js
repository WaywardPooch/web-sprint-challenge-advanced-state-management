// Libraries
import axios from "axios";

// Constants
export const FETCH_INIT = "FETCH_INIT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const FORM_ERROR ="FORM_ERROR";

// Standard actions
export const startFetch = () => {
  return { type: FETCH_INIT };
};
export const updateSmurfs = (newSmurfs) => {
  return { type: FETCH_SUCCESS, payload: newSmurfs };
};
export const setFetchError = (error) => {
  return { type: FETCH_FAILURE, payload: error };
};
export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};
export const setFormError = (error) => {
  return { type: FORM_ERROR, payload: error }
}


// Thunk actions
export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(startFetch());
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch(updateSmurfs(response.data));
      })
      .catch((error) => {
        dispatch(setFetchError(error));
      });
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

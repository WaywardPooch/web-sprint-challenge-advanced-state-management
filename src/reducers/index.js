// Import action constants
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_SMURF,
  FORM_ERROR
} from "./../actions";

// Set up an initial state
export const initialState = {
  smurfList: [],
  isLoading: false,
  fetchError: "",
  formError: "",
};

// Set up the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        fetchError: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfList: action.payload,
        isLoading: false,
        fetchError: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        smurfList: [],
        isLoading: false,
        fetchError: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfList: [...state.smurfList, action.payload],
      };
    case FORM_ERROR:
      return {
        ...state,
        formError: action.payload,
      };
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.

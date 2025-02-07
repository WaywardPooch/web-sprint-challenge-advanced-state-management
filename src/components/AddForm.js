// Libraries
import React, { useState } from "react";
import { connect } from "react-redux";
// Actions
import { setFormError, addSmurf } from "../actions";

const AddForm = (props) => {
  // Prop destructuring
  const { errorMessage, setFormError, addSmurf } = props;

  // Form state setup
  const initialState = {
    name: "",
    position: "",
    nickname: "",
    description: "",
  };
  const [state, setState] = useState(initialState);

  // Event Handlers
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.position === "" || state.nickname === "") {
      setFormError("Invalid form inputs; smurf requires a name, nickname, and position!");
    } else {
      addSmurf(state);
      setState(initialState);
    }
  };

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button>Submit Smurf</button>
      </form>
    </section>
  );
};

// Make global state properties available here
const mapStateToProps = (state) => {
  return {
    errorMessage: state.formError,
  };
};

// Connect Redux to this component
export default connect(mapStateToProps, { setFormError, addSmurf })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.

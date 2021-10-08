// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Components
import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
// Actions
import { fetchSmurfs } from "./actions";

class App extends Component {
  // On mount, fetch the smurfs from the API
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  // Render the app
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

// Make global state props available here
const mapStateToProps = (state) => {
  return {
    smurfList: state.smurfList,
    isLoading: state.isLoading,
    error: state.error,
  };
};

// Connect Redux to the app component
export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.

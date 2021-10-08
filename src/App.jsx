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
import { getSmurfs } from "./actions";

class App extends Component {
  componentDidMount() {
    getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.props.error ? (
            <p>Error! Could not load smurfs. :-(</p>
          ) : this.props.isLoading ? (
            <p>Loading Smurfs List...</p>
          ) : (
            <SmurfList />
          )}
          <AddForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfList: state.smurfList,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.

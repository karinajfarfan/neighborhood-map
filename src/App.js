import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Draper, Utah.</h1>
          <p>Click to begin exploring.</p>
        </header>
      </div>
    );
  }
}

export default App;

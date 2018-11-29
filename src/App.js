import React, { Component } from "react";
import logo from "./logo.svg";
import MapContainer from "./components/Map";
import Background from "./components/Background";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleOnClick: false
    };
  }

  handleOnClick = () => {
    this.setState({ handleOnClick: true });
  };

  renderWelcome = () => {
    if (!this.state.handleOnClick) {
      return (
        <div className="App-header" onClick={this.handleOnClick}>
          <Background />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Draper, Utah.</h1>
          <p>Click to begin exploring.</p>
        </div>
      );
    } else {
      return (
        <div>
          <MapContainer />
        </div>
      );
    }
  };

  render() {
    return <div className="App">{this.renderWelcome()}</div>;
  }
}

export default App;

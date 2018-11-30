import React, { Component } from "react";
import logo from ".././logo.svg";
import Main from "./Main";

//Welcome page handles on click method

class Welcome extends Component {
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
        <div className="welcome" onClick={this.handleOnClick}>
          <img src={logo} className="marker-logo" alt="logo" />
          <h1>Welcome to Draper, Utah.</h1>
          <p>Click to begin exploring.</p>
        </div>
      );
    } else {
      return (
        <div>
          <Main />
        </div>
      );
    }
  };

  render() {
    return <div className="App">{this.renderWelcome()}</div>;
  }
}

export default Welcome;

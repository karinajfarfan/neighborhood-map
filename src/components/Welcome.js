import React, { Component } from "react";
import logo from ".././logo.svg";
import img from "./img/img.jpg";
import Main from "./Main";

//Welcome page background image

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
        <div className="App-header" onClick={this.handleOnClick}>
          <img
            src={img}
            alt="background"
            style={{ width: "100%" }}
            role="image"
            aria-label="Photo by Aksonsat Uanthoeng from Pexels"
          />
          <img src={logo} className="App-logo" alt="logo" />
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

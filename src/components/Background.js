import React, { Component } from "react";
import img from "./img/img.jpg";

//Welcome page background image

const sectionStyle = {
  width: "100%",
  height: "400px"
};

class Background extends Component {
  render() {
    return (
      <img
        src={img}
        alt="background image"
        style={sectionStyle}
        role="image"
        aria-label="Photo by Aksonsat Uanthoeng from Pexels"
      />
    );
  }
}

export default Background;

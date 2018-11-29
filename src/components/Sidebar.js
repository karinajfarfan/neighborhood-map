import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    // console.log("Props", this.props);
    return (
      <ol className="places-list">
        {this.props.contacts.map(places => (
          <li>{places.title}</li>
        ))}
      </ol>
    );
  }
}

export default Sidebar;

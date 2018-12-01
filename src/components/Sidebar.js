import React, { Component } from "react";

class Sidebar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     place: true
  //   };
  // }

  renderList = (place, index) => {
    return (
      <button
        className="list-item"
        key={index}
        name={props.place.title}
        position={props.place.location}
        onClick={this.onMarkerClick}
      />
    );
  };

  render() {
    return (
      <div className="sidebarContainer">
        {this.props.places.map((place, index) => this.renderList(place, index))}
      </div>
    );
  }
}

export default Sidebar;

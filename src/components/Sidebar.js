import React, { Component } from "react";

class Sidebar extends Component {
  renderList = (place, index) => {
    return (
      <button
        key={index}
        name={place.title}
        position={place.location}
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

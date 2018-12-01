import React, { Component } from "react";

const Sidebar = props => {
  const renderList = (place, index) => {
    return (
      <button
        className="list-item"
        key={index}
        position={place.location}
        onClick={() => props.sidebarElementOnClick(place)}
      >
        {place.title}
      </button>
    );
  };

  return (
    <div className="sidebarContainer">
      {props.places.map((place, index) => renderList(place, index))}
      <form>
        <label>
          filter:
          <input
            type="text"
            value={props.filterValue}
            onChange={props.filterResults}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Sidebar;

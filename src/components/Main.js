import React, { Component } from "react";
import MapContainer from "./Map";
import Sidebar from "./Sidebar";

/*Passes all places into the map as props.*/

//Static list of 5 places in Draper, UT
const places = [
  {
    title: "Paragliding Park: South Side",
    location: { lat: 40.457842, lng: -111.901385 }
  },
  { title: "Draper Park", location: { lat: 40.523436, lng: -111.85459 } },
  {
    title: "Cactus & Tropicals",
    location: { lat: 40.527746, lng: -111.85259 }
  },
  {
    title: "Potato Hill Trailhead",
    location: { lat: 40.488432, lng: -111.84885 }
  },
  {
    title: "Eagle Crest Trailhead",
    location: { lat: 40.47218, lng: -111.836228 }
  }
];

class Main extends Component {
  render() {
    return (
      <div>
        <MapContainer />
        <Sidebar places={places} />
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import * as fourSquareAPI from './APIs/fourSquareAPI.js';

class MapContainer extends Component {
  //  Bounds: 40.544379,-111.783164 — 40.442562,-111.921768

  render() {
    return (
      <Map
        google={this.props.google}
        className={"map"}
        style={{ width: "100%", height: "100%" }}
        initialCenter={{
          lat: 40.524671,
          lng: -111.863823
        }}
        zoom={12}
      >
        <Marker
          name={"Draper Park"}
          position={{ lat: 40.523436, lng: -111.85459 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac"
})(MapContainer);

// // https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap

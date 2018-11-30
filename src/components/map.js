import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import * as fourSquareAPI from './APIs/fourSquareAPI.js';

class MapContainer extends Component {
  //  Bounds: 40.544379,-111.783164 — 40.442562,-111.921768

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  // When info window is opened
  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  // When info window is closed
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // Renders Map, Markers, and Info Window
  render() {
    return (
      <Map
        google={this.props.google}
        className={"map"}
        style={{ width: "100%", height: "100%" }}
        //Map centered at Draper, UT
        initialCenter={{
          lat: 40.524671,
          lng: -111.863823
        }}
        zoom={12}
      >
        <Marker
          name={places.title} //this is not working - how can i call the places object properties
          position={places.location} //this is not working - how can i call the places object properties
          onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

// Google Maps API key
export default GoogleApiWrapper({
  apiKey: "AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac"
})(MapContainer);

// // https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap

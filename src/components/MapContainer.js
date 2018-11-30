import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getSearchResult, getDetails } from "./APIs/fourSquareAPI.js";

class MapContainer extends Component {
  //  Bounds: 40.544379,-111.783164 — 40.442562,-111.921768
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {
        lat: "",
        lng: "",
        title: ""
      },
      marker: {},
      selectedPlace: {},
      imgSrc: <div>No Image</div>
    };
  }

  // When info window is opened
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: {
        lat: props.position.lat,
        lng: props.position.lng,
        title: props.name
      },
      marker,
      showingInfoWindow: true
    });
    this.renderFourSquareAPI();
  };

  // When info window is closed
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  //takes the prop place from the array in the main component
  renderMarkers = (place, index) => {
    return (
      <Marker
        key={index}
        name={place.title}
        position={place.location}
        onClick={this.onMarkerClick}
      />
    );
  };

  //stores foursquare api info in the imgSrc to display on infoWindow
  renderFourSquareAPI = () => {
    if (
      Object.keys(this.state.activeMarker).length === 0 &&
      this.state.activeMarker.constructor === Object
    ) {
    } else {
      let id = "";
      getSearchResult(
        this.state.activeMarker.lat,
        this.state.activeMarker.lng,
        this.state.activeMarker.title
      ).then(response => {
        id = response;
        let details = "";
        getDetails(id).then(getDetailsResponse => {
          details = getDetailsResponse;
          if (
            !Object.keys(details.response).length === 0 &&
            details.response.constructor === Object
          ) {
            const url = details.response.venue.bestPhoto;
            const imgSrc = `${url.prefix}${url.width}${url.suffix}`;
            this.setState({
              imgSrc: <img src={imgSrc} alt="retrieved from foursquareAPI" />
            });
          }
        });
      });
    }
  };

  // Renders Map, Markers, and Info Window
  render() {
    return (
      <Map
        google={this.props.google}
        className={"map"}
        style={{ width: "80%", height: "100%" }}
        //Map centered at Draper, UT
        initialCenter={{
          lat: 40.524671,
          lng: -111.863823
        }}
        zoom={12}
      >
        {this.props.places.map((place, index) =>
          this.renderMarkers(place, index)
        )}
        <InfoWindow
          marker={this.state.marker}
          visible={this.state.showingInfoWindow}
        >
          <div>{this.state.imgSrc}</div>
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

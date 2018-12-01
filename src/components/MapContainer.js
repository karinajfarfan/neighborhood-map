import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getSearchResult, getDetails } from "./APIs/fourSquareAPI.js";
import Sidebar from "./Sidebar";

class MapContainer extends Component {
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
      imgSrc: <div>No Image</div>,
      currentPlace: "",
      filteredPlaces: props.places
    };
  }

  // When info window is opened
  onMarkerClick = (props, marker) => {
    this.setState({
      currentPlace: {
        lat: props.position.lat,
        lng: props.position.lng,
        title: props.name
      },
      selectedPlace: props,
      activeMarker: {
        lat: props.position.lat,
        lng: props.position.lng,
        title: props.name
      },
      marker
    });
    this.renderFourSquareAPI();
  };

  // When info window is closed
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        imgSrc: <div>no img</div>,
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
    let id = "";
    getSearchResult(
      this.state.activeMarker.lat,
      this.state.activeMarker.lng,
      this.state.activeMarker.title
    ).then(response => {
      id = response;
      let details = "";
      getDetails(id)
        .then(getDetailsResponse => {
          details = getDetailsResponse;
          const url = details.response.venue.bestPhoto;
          const imgSrc = `${url.prefix}${url.width}${url.suffix}`;
          this.setState({
            imgSrc: <img src={imgSrc} alt="retrieved from foursquareAPI" />,
            showingInfoWindow: true
          });
        })
        .catch(err => {
          this.setState({ imgSrc: <div>err</div>, showingInfoWindow: true });
        });
    });
  };

  // Renders Map, Markers, and Info Window
  render() {
    return (
      <div>
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
          {this.state.filteredPlaces.map((place, index) =>
            this.renderMarkers(place, index)
          )}
          <InfoWindow
            marker={this.state.marker}
            visible={this.state.showingInfoWindow}
          >
            <div>{this.state.imgSrc}</div>
          </InfoWindow>
        </Map>
        <Sidebar places={this.props.places} />
      </div>
    );
  }
}

// Google Maps API key
export default GoogleApiWrapper({
  apiKey: "AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac"
})(MapContainer);

// // https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap

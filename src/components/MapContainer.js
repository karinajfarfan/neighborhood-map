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
      filteredPlaces: props.places,
      filterValue: ""
    };
  }

  sidebarElementOnClick = props => {
    this.setState(
      {
        currentPlace: {
          lat: props.location.lat,
          lng: props.location.lng,
          title: props.title
        },
        activeMarker: {
          lat: props.location.lat,
          lng: props.location.lng,
          title: props.title
        }
      },
      () => {
        this.renderFourSquareAPI();
      }
    );
  };

  filterResults = event => {
    let filt = [];
    this.props.places.map(place => {
      const splitTitle = place.title.split("");
      const splitEventValue = event.target.value.split("");
      let matching = 0;

      for (let i = 0; i <= splitEventValue.length; i++) {
        if (splitEventValue[i] === splitTitle[i]) {
          matching++;
        }
      }
      if (matching === splitEventValue.length) {
        filt.push(place);
      }
    });
    this.setState({
      filterValue: event.target.value,
      filteredPlaces: filt
    });
  };

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
    )
      .then(response => {
        if (!response) {
          this.setState({
            imgSrc: <div>error in api response</div>,
            showingInfoWindow: true
          });
        } else {
          id = response;
          let details = "";
          getDetails(id)
            .then(getDetailsResponse => {
              details = getDetailsResponse;
              if (!details.hasOwnProperty("venue")) {
                this.setState({
                  imgSrc: <div>API returned with invalid response</div>,
                  showingInfoWindow: true
                });
              } else {
                const url = details.response.venue.bestPhoto;
                const imgSrc = `${url.prefix}${url.width}${url.suffix}`;
                this.setState({
                  imgSrc: (
                    <img src={imgSrc} alt="retrieved from foursquareAPI" />
                  ),
                  showingInfoWindow: true
                });
              }
            })
            .catch(err => {
              this.setState({
                imgSrc: <div>error in api response</div>,
                showingInfoWindow: true
              });
            });
        }
      })
      .catch(err => {
        this.setState({ imgSrc: <div>error</div>, showingInfoWindow: true });
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
            position={{
              lat: this.state.activeMarker.lat,
              lng: this.state.activeMarker.lng
            }}
            visible={this.state.showingInfoWindow}
          >
            <div>{this.state.imgSrc}</div>
          </InfoWindow>
        </Map>
        <Sidebar
          places={this.props.places}
          sidebarElementOnClick={this.sidebarElementOnClick}
          filterResults={this.filterResults}
          filterValue={this.state.filterValue}
        />
      </div>
    );
  }
}

// Google Maps API key
export default GoogleApiWrapper({
  apiKey: "AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac"
})(MapContainer);

// // https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap

import React, { Component } from "react";

class Map extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         map: ""
  //         mapLoaded: false,
  //         message: ""
  //     };
  // }

  componentDidMount() {
    this.loadMap();
  }

  loadMap = () => {
    this.loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    //create a map
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.524671, lng: -111.863823 },
      zoom: 10
    });

    // this.setState({
    //     map: map,
    //   })
  };

  loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;

    // script.onerror = function() {
    //     this.setState({
    //     mapLoaded: false,
    //     messsage: "Google Maps API failed to load"
    //     });
    // };

    // this.setState({
    //     mapLoaded: true
    // });

    index.parentNode.insertBefore(script, index);
  }

  // renderMap() {
  //     if (this.state.mapLoaded) {
  //         return (
  //         <LocationList  *** should be places
  //             key="100"
  //             site={this.state.site}
  //         />
  //         );
  //     } else {
  //         return <div>{this.state.message}</div>;
  //     }
  // }

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

export default Map;

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap

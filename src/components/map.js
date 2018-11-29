import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import * as fourSquareAPI from './APIs/fourSquareAPI.js';

export class MapContainer extends Component {
  render() {
    return <Map google={this.props.google} zoom={14} />;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac"
})(MapContainer);

// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 40.524671,
//       lng: -111.863823
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: AIzaSyBYX4tZYpMWfZQ_kdub - M4ONYJFKQTp6Ac }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={40.457842}
//             lng={-111.901385}
//             text={"Kreyser Avrora"}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;

// // https://maps.googleapis.com/maps/api/js?key=AIzaSyBYX4tZYpMWfZQ_kdub-M4ONYJFKQTp6Ac&callback=initMap

/* Four Square API fetch request */

const CLIENT_ID = "HB03ZGOVXHUVQTLNYCZ2ATY3HJ3XSCA2MC023G0JPTISW1II";
const CLIENT_SECRET = "KFRAYOS3IYLOKECR1RVWNZD4SZ5CUSOQV3QZPZIUOAGP5ARZ";
const API = "https://api.foursquare.com/v2";
const VERSION = "20181127";

const RADIUS_M = 250;
const SEARCH_RESULTS = 1;

/**
 *Return a venue id from FourSquare. Takes lat, lng & name.
 */

export const getSearchResult = (lat, lng, name) =>
  fetch(`${API}/venues/search?ll=${lat},${lng}&limit=${SEARCH_RESULTS}&radius=${RADIUS_M}&query=${name}
    	&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`)
    .then(response => response.json())
    .then(response => response.response.venues[0].id)
    .catch("error");

/**
 *Return an array of details about a place from FourSquare. Takes venue id.
 */

export const getDetails = id =>
  fetch(
    `${API}/venues/${id}?&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`
  )
    .then(res => res.json())
    .catch("error");

//creating the link to get the venue details, uses lat, lng, and name to search for the venue ID.
//Then uses the venue id to retrieve details about the venue.
// the promise also catches the error, if error occurs.
//promise works similar to an if else function
//I don't understand the const Radius_m

// fetch('https://api.foursquare.com/v2/venues/explore?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
// .then(function() {
//     // Code for handling API response
// })
// .catch(function() {
//     // Code for handling errors
// });

// ToDO: foursquare has a react library - will commit this version and try the foursquare react library --- maybe check out http://stevebrown.co/journal/creating-a-local-venue-app-using-reactredux-with-the-foursquare-api-part-i

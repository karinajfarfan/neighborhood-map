//Four Square API fetch request

const clientID = "HB03ZGOVXHUVQTLNYCZ2ATY3HJ3XSCA2MC023G0JPTISW1II";
const ClientSecret = "KFRAYOS3IYLOKECR1RVWNZD4SZ5CUSOQV3QZPZIUOAGP5ARZ";
const API = "https://api.foursquare.com/v2";
const v = "20181127";
const radius = 250;
const amountOfSearchResults = 1;

//fetch request creates Foursquare link to retrieve venue id, uses variables declared above and location lat, lng, and name.

export const getSearchResult = (lat, lng, name) =>
  fetch(`${API}/venues/search?ll=${lat},${lng}&limit=${amountOfSearchResults}&radius=${radius}&query=${name}
    	&client_id=${clientID}&client_secret=${ClientSecret}&v=${v}`)
    .then(response => response.json())
    .then(response => response.response.venues[0].id)
    .catch("error");

//fetch request uses venue id that was retrieved from the getSearchResult promise

export const getDetails = id =>
  fetch(
    `${API}/venues/${id}?&client_id=${clientID}&client_secret=${ClientSecret}&v=${v}`
  )
    .then(res => res.json())
    .catch("error");

//example from Foursquare developers documentation
// fetch('https://api.foursquare.com/v2/venues/explore?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
// .then(function() {
//     // Code for handling API response
// })
// .catch(function() {
//     // Code for handling errors
// });

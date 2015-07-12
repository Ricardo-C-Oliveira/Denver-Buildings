L.mapbox.accessToken = 'pk.eyJ1IjoiZGFya3ZlbmdlcnMiLCJhIjoidFQyQi15ayJ9.0ImOfSMr3xjHj9W1Ilbo1g';
//set maxBounds
var southWest = L.latLng(39.590034, -105.159291),
  northEast = L.latLng(39.932998, -104.57759),
  bounds = L.latLngBounds(southWest, northEast);
// Create a map in the div #map
var map = L.map('map', {
  'zoomControl': false,
  'maxBounds': bounds,
  'maxZoom': 16,
  'minZoom': 13
}).setView([39.745335, -104.993127], 13);

var layer = L.mapbox.tileLayer('darkvengers.fadeb801').addTo(map);

//collapse and show sidebar
$('#sidebar').slideReveal({
  trigger: $("#tabIcon"),
  width: 300,
  //push: false,
});

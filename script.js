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
}).setView([39.745335, -104.960027], 13);

var layer = L.mapbox.tileLayer('darkvengers.fadeb801').addTo(map);

//custom geocoding control
var geocoder = L.mapbox.geocoder('mapbox.places');
function showMap(err, data) {
  // The geocoder can return an area, like a city, or a
  // point, like an address. Here we handle both cases,
  // by fitting the map bounds to an area or zooming to a point.
  if (data.lbounds) {
    map.fitBounds(data.lbounds);
  } else if (data.latlng) {
    map.setView([data.latlng[0], data.latlng[1]], 13);
  }
}

$("#geocodeBtn").click(
function geocodeThis() {
  var text =  $('#search').val();
  if (text.length >= 5) {
    geocoder.query(text, showMap);
  }
});

//collapse and show sidebar
$('#sidebarLeft').slideReveal({
  trigger: $("#toggleLeft"),
  width: 300,
  push: false,
});

$('#sidebarRight').slideReveal({
  trigger: $("#toggleRight"),
  width: 250,
  push: false,
  position: "right",
});

//tooltip opt-in
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

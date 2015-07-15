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
function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (!map) {
        map = L.mapbox.map('map', 'examples.map-h67hf2ic');
    }

    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13);
    }
}


function geocodeThis() {
    var text = document.getElementById('search').value;
    if (text.length >= 5) {
        geocoder.query(text, showMap);
    }
}



//collapse and show sidebar
$('#sidebar').slideReveal({
  trigger: $("#tabIcon"),
  width: 300,
  //push: false,
});

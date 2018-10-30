var lat = 37.422142;
var lng = -122.084048;

function onMapClick(e) {
	popup.setLatLng(e.latlng)
	.setContent("Current position: " + e.latlng.toString())
	.openOn(mymap);
}

// nilai balik berupa obyek map
var mymap = L.map('mapid').setView([lat, lng], 14);

// menciptakan tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
	{
		attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 17,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoieWFzaXJtYXVsYW5hIiwiYSI6ImNqbWJ2MjF0bjBhMmIzcHFtb3ZtM3lzZXgifQ.VJMTrZeU5zDVZ64ATpGe7g'
	}).addTo(mymap);


mymap.on('click', onMapClick);

var marker = L.marker([lat, lng]).addTo(mymap);
marker.bindPopup("<b>Googleplex</b><br>Google's large global headquarters").openPopup();

var circle = L.circle([lat, lng], {
	color: 'green',
	fillColor: 'lightblue',
	fillOpacity: 0.5,
	radius: 100
}).addTo(mymap);

var popup = L.popup();

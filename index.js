/*function initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {
        lat:  -33.431919,
        lng: -70.647897
      }
    })}*/
    var mymap = L.map('map').setView([-33.431919, -70.647897], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyeS1wZWFjZSIsImEiOiJjazVkOXBqemowNDIwM2RvNndlNTBseGgxIn0.AjZcCL7JFd-Lx6oFntj-Tg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

$('#ubication-User').on('click', (event)=>{
  event.preventDefault()
  console.log("aqui toy!")
  mymap.locate({setView: true, maxZoom: 16});
  function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);
function onLocationError(e) {
  alert(e.message);
}

mymap.on('locationerror', onLocationError);
})
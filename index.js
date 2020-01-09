function initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {
        lat:  -33.431919,
        lng: -70.647897
      }
    })}
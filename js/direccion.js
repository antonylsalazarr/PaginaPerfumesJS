function initMap() {

    var limaCoords = [-12.0464, -77.0428];


    var map = L.map('map').setView(limaCoords, 12);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);


    map.on('click', function (event) {

        var confirmed = confirm('¿Deseas ver esta ubicación en Google Maps?');


        if (confirmed) {

            var lat = event.latlng.lat;
            var lng = event.latlng.lng;


            var googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;


            window.open(googleMapsUrl, '_blank');
        }
    });

    map.invalidateSize();
}

document.addEventListener('DOMContentLoaded', initMap);

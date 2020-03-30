// map: ->
// 		map = new google.maps.Map document.getElementById('map'),
//     zoom: 13
//     center: new google.maps.LatLng(50.439786, 30.500607)
//     mapTypeId: google.maps.MapTypeId.ROADMAP

//     marker = new google.maps.Marker
//     position: new google.maps.LatLng(50.439786, 30.500607)
// map: map
//     title: 'Паньковская 18, офис 11'
//     clickable: true
//     icon: "<%= image_path('icons/marker.png')%>"
function initMap() {
    // The location of Uluru
    var uluru = {50.439786, 30.500607};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}

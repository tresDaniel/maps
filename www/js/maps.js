var myCenter=new google.maps.LatLng(-34.397, 150.644);

function initialize() {
  var mapOptions = {
    center:myCenter,
    zoom:6,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

  var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

    marker.setMap(map);

    google.maps.event.addListener(marker,'click',function() {
      map.setZoom(9);
      map.setCenter(marker.getPosition());
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
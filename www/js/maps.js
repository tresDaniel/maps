var map;
var pos;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


  //Geolocalização do aparelho
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

        var infowindow = new google.maps.InfoWindow({
          map: map,
          position: pos,
          content: 'Você está aqui.'
        });

        //Marcador
        var marker=new google.maps.Marker({
          map:map,
          position:pos,
          animation:google.maps.Animation.BOUNCE
        });

        google.maps.event.addListener(marker,'click',function() {
          map.setZoom(9);
          map.setCenter(marker.getPosition());
        });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }

  //Erro na Geolocalização
  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

}

google.maps.event.addDomListener(window, 'load', initialize);


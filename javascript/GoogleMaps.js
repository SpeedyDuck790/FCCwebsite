function myMap() {
    const x = -38.147375942063874;
    const y = 145.14332144072634;
        var mapProp = {
          center: new google.maps.LatLng(x, y),
          zoom: 15,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      }
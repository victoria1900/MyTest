const city = document.querySelector('header-contacts-phone-city')

YMaps.jQuery(function () {

    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
        center,
        zoom = 10;
    if (YMaps.location) {
        center = new YMaps.GeoPoint(YMaps.location.longitude, YMaps.location.latitude);

        if (YMaps.location.zoom) {
            zoom = YMaps.location.zoom;
        }

        map.openBalloon(center, "Место вашего предположительного местоположения:<br/>" +
            (YMaps.location.country || "") +
            (YMaps.location.region ? ", " + YMaps.location.region : "") +
            (YMaps.location.city ? ", " + YMaps.location.city : "")
        )
    } else {
        center = new YMaps.GeoPoint(37.64, 55.76);
    }

    map.setCenter(center, zoom);

    console.log(YMaps.location.country);
    console.log(YMaps.location.region);
    console.log(YMaps.location.city);

    // if (YMaps.location.city != '') {
    //     document.querySelector('header-contacts-phone-city')
    //     // document.write ("Ваш город: " + YMaps.location.city);
    // }
});
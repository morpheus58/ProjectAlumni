/**
 * Created by Morya Jr on 6/1/2015.
 */
"use strict";

$(document).ready(function () {
    var mapElem = $('#map');
    var center = {
        lat: 47.6,
        lng: -122.3
    };

    var map = new google.maps.Map(mapElem[0], {
        center: center,
        zoom: 14
    });
});
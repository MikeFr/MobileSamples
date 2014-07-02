// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

/// <reference path="typings/maps/google.maps.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
module GeLocationSample
{
    "use strict";

    export module Application
    {
        export function initialize()
        {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

            
        }

        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }

        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }

    }

    export module GMapping
    {
        export function initMap(mapDiv: Element)
        {
            var mapOptions =
                {
                    center: new google.maps.LatLng(43.069452, -89.411373),
                    zoom: 11,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            var map = new google.maps.Map(mapDiv, mapOptions);
        }

        export function findMyPosition() {
            var posOptions = { enableHighAccuracy: true, maximumAge: 3000, timeout: 60000 };
            // Perform a call to Google Maps API
            navigator.geolocation.getCurrentPosition(onSuccess, onError, posOptions );
        }

        /************************
        * onSuccess Geolocation *
        ************************/
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            var geoMessage =
                'Latitude: ' + position.coords.latitude +
                '<br />Longitude: ' + position.coords.longitude +
                '<br />Accuracy: ' + position.coords.accuracy +
                '<br />Timestamp: ' + position.timestamp;
            element.innerHTML = geoMessage;

            //MAP
            var myLat = position.coords.latitude;
            var myLong = position.coords.longitude;
            var mapOptions = {
                center: new google.maps.LatLng(myLat, myLong),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

            //MARKER
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(myLat, myLong),
                map: map,
                title: "MyPosition"
            });
        }

        /**************************************
        * onError Geolocation Callback        *
        *   - receives a PositionError object *
        **************************************/
        function onError(error) {
            alert('code: ' + error.code + '\n message: ' + error.message + '\n');
        }
    }

    window.onload = function () {
        Application.initialize();
        GMapping.initMap(document.getElementById("map_canvas"));
        var divContent = document.getElementById("content");
        var button = document.createElement('button');
        button.textContent = "Find My Position!";
        button.onclick = function () {
            GMapping.findMyPosition();
        }
        divContent.appendChild(button);
    }
}

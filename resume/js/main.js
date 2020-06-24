$(document).ready(function() 
{
    $('.menu-toggler').on('click', function() 
    {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() 
    {
        $('menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });

});

// Set up global variable
var result;
        
function showPosition() {
     // Store the element where the page displays the result
     result = document.getElementById("result");
     
     // If geolocation is available, try to get the visitor's position
     if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
         result.innerHTML = "Getting location information...";
     } else {
         alert("Sorry, your browser unsupported.");
     }
};
 
// Define callback function for successful attempt
function successCallback(position) {
     result.innerHTML = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
}
 
// Define callback function for failed attempt
function errorCallback(error) {
     if(error.code == 1) {
         result.innerHTML = "You've decided not to share your position.";
     } else if(error.code == 2) {
         result.innerHTML = "The network is down or the positioning service can't be reached.";
     } else if(error.code == 3) {
         result.innerHTML = "The attempt timed out before it could get the location data.";
     } else {
         result.innerHTML = "Geolocation failed due to unknown error.";
     }
}

function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
 
// Define callback function for successful attempt
function showMap(position) {
    // Get location data
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var latlong = new google.maps.LatLng(lat, long);
    
    var myOptions = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {
            style:google.maps.NavigationControlStyle.SMALL
        }
    }
    
    var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
    var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
}
 
// Define callback function for failed attempt
function showError(error) {
    if(error.code == 1) {
        result.innerHTML = "Your location is not enabled.";
    } else if(error.code == 2) {
        result.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if(error.code == 3) {
        result.innerHTML = "The attempt timed out before it could get the location data.";
    } else {
        result.innerHTML = "Geolocation failed due to unknown error.";
    }
}
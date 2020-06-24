var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    onDeviceReady: function(){
        /*app.recievedEvent('deviceready');
        app.runGeolocation();*/
        document.getElementById("getlocation").addEventListener('click', getpostioninfo);
    },

    getpostioninfo: function(){
        var options = {
            maximumAge: 3600000,
            timeout: 300,
            enableHighAccuracy: true
        };
        navigator.geolocation.watchPosition(onSuccess, onError, option);
        function onSuccess(position){
            alert('latitude :' + position.coords.lastitude+"\n"+
            "longitude :" + position.coords.longitude);
        }
        function onError(error){
            alert("Error "+error);
        }
    }
    

    /* Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    runGeolocation: function(){

        var options = { 
            maximumAge: 3000, 
            timeout: 5000, 
            enableHighAccuracy: true 
        };

        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n'
                );
        };

        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }*/

};

app.initialize();
app.factory("iconService", function(){
    var service = {};
    
    service.imgSrc = function(desc){
        var src = {
                "partly-cloudy-night": "images/partly-cloudy-night.png",
                "partly-cloudy-day":   "images/partly-cloudy-day.png", 
                "clear-day":   "images/clear-day.png",
                "clear-night": "images/clear-night.png",
                "rain":   "images/rain.png",
                "snow":   "images/snow.png",
                "sleet":  "images/sleet.png", 
                "wind":   "images/wind.png",
                "fog":    "images/clear-day.png",
                "cloudy": "images/cloudy.png",
        };
    
        return src[desc];
    };
        return service;
    });
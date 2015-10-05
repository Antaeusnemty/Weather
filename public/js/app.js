//Initializes the angular application
var app = angular.module("ngWeather",["ngRoute"]);


//This configures the front end routing using the $routeProvider
app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl:"html/home.html",
        controller: "HomeController"
    })
    .when("/weather",{
        templateUrl:"html/weather.html",
        controller: "WeatherController"
    })
    .otherwise({
        redirectTo: "/home"
        })
        
});

app.factory("weatherService", function($http){
    var service = {};
     var baseUrl = "https://api.forecast.io/forecast/";
      var baseUrlwApi = baseUrl + apiKey+"/";
    //this is going to get the weather info
    service.get = function(latitude, longitude){
    //http GET 
return $http.jsonp(baseUrlwApi+latitude+","+longitude+"?callback=JSON_CALLBACK")
    };

    return service;
});
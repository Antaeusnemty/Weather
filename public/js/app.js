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


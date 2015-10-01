var app = angular.module("ngWeather",["ngRoute"]);

app.controller("TestController", function($scope){

    $scope.test = "It works";
});

app.controller("WeatherController", function($scope){
    $scope.name = "Weather";
});
app.controller("HomeController", function($scope){

});
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



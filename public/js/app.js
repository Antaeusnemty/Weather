var app = angular.module("ngWeather",["ngRoute"]);

app.controller("TestController", function($scope){

    $scope.test = "It works";
});

app.controller("WeatherController", function($scope, $http){
    $scope.name = "Weather";
    $scope.weatherData = {};
    var baseUrl = "https://api.forecast.io/forecast/";
    var baseUrlwApi = baseUrl + apiKey+"/";
    
    //http GET 
    $http.jsonp(baseUrlwApi+"37.8267,-122.423?callback=JSON_CALLBACK")
        .success(function(response){
            $scope.weatherData = response;
            console.log($scope.weatherData);
    })
        .error(function(err){
            console.log(err);
    });
    
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



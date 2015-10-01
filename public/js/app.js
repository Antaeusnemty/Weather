var app = angular.module("ngWeather",["ngRoute"]);

app.controller("TestController", function($scope){

    $scope.test = "It works";
});

app.controller("WeatherController", function($scope, $http){
    $scope.latitude = 0;
    $scope.logitude = 0;
    $scope.weatherData = {};
    var baseUrl = "https://api.forecast.io/forecast/";
    var baseUrlwApi = baseUrl + apiKey+"/";
    
    //getWeather function
    $scope.getWeather = function(){
    
        //http GET 
        $http.jsonp(baseUrlwApi+$scope.latitude+","+$scope.longitude+"?callback=JSON_CALLBACK")
            .success(function(response){
                $scope.weatherData = response;
                console.log($scope.weatherData);
    })
            .error(function(err){
              console.log(err);
    });
    };
    
    
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



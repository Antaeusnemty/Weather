app.controller("WeatherController", function($scope, $http){
    $scope.latitude = 0;
    $scope.longitude = 0;
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
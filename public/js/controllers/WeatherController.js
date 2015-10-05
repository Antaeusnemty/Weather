app.controller("WeatherController", function($scope, weatherService){
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.weatherData = {};
    $scope.showWeather = false;
   
    
    //getWeather function
    $scope.getWeather = function(){
     weatherService.get($scope.latitude, $scope.longitude)
        .success(function(response){
          $scope.weatherData = response;
            $scope.showWeather = true;
      
         })
        .error(function(err){
          console.log(err);
            $scope.showWeather = false;
        });
    };
});


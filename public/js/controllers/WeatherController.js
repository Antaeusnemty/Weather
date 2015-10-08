app.controller("WeatherController", function($scope, weatherService, geocodeService){
 //   $scope.latitude = 0;
//    $scope.longitude = 0;
    $scope.location = "";
    $scope.weatherData = {};
    $scope.showWeather = false;
   
    
    //getWeather function
    $scope.getWeather = function(){
        var latitude = 0;
        var longitude = 0;
        
       //reminder
        geocodeService.getGeocode($scope.location)
            .success(function(response){
            latitude = response
                  .results[0]
                  .geometry
                  .location
                  .lat;
                longitude = response
                  .results[0]
                  .geometry
                  .location
                  .lng;
                console.log(latitude);
                console.log(longitude);
            
                weatherService.get(latitude, longitude)
                    .success(function(response){
                        $scope.weatherData = response;
                        $scope.showWeather = true;

                });
             })
            .error(function(err){
             console.log(err)
            })
        .error(function(err){
          console.log(err);
            $scope.showWeather = false;
        });
    };
});
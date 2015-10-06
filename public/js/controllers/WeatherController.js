app.controller("WeatherController", function($scope, $http, weatherService){
 //   $scope.latitude = 0;
//    $scope.longitude = 0;
    $scope.location = "";
    $scope.weatherData = {};
    $scope.showWeather = false;
   
    
    //getWeather function
    $scope.getWeather = function(){
        var latitude = 0;
        var longitude = 0;
        
        $http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+$scope.location+"&key=AIzaSyAKIX_clokWdTnhvueWf9GW0m9ufXjU-tU")
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
         })
        .error(function(err){
         console.log(err)
        })
        weatherService.get(latitude, longitude)
        .success(function(response){
          $scope.weatherData = response;
            $scope.showWeather = true;
      
         })
        //weather service
                                      //       weatherService.get(latitude, longitude)
                                        //        .success(function(response){
                                    //              $scope.weatherData = response;
                                      //              $scope.showWeather = true;

                                        //         })
        .error(function(err){
          console.log(err);
            $scope.showWeather = false;
        });
    };
});
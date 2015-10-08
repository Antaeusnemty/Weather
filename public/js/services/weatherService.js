// create weather service
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
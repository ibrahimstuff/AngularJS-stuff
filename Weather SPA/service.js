//SERVICES
weatherApp.service('cityService', function(){
   
    this.city = "Chennai, TN";
    
});

weatherApp.service('weatherService',['$resource', function($resource){
    
    this.getWeather = function(city, days) {
    
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ callback:"JSON_CALLBACK"}, { get: { method: "JSONP"}});

        return weatherAPI.get({ q : city, APPID : "4ba8dbb5026d4d08f872fe89116de52b", cnt : days });
    
    }
}]);
//DIRECTIVE
weatherApp.directive("weatherReport", function(){
   
    return {
        restrict : 'E',
        templateUrl : 'directive/weatherReport.html',
        replace : true,
        scope :{
            weatherDay: "=",
            convertDateFunction : '&',
            convertFahrenheitFunction : '&',
            dateFormat: "@"
        }
    }
    
});
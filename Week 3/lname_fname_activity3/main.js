$(document).ready(function(){
    	$.ajax({                             
    		url : "http://api.wunderground.com/api/ce24dab0c3bf6646/forecast/geolookup/conditions/q/FL/Melbourne.json",
    		dataType : "json", 
              success : function(parsed_json) { 
                  var location = parsed_json['location']['city']; 
                  var temp_f = parsed_json['current_observation']['temp_f'];
                      $(".current").html("Current temperature in " + location + " is: " + temp_f+"ºF");
              } 
    	}); 
});
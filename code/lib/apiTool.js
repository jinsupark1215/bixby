const key = "AIzaSyAQcZwVV4VtCb_VvrNRkXOt1tiFwD1_KIY"
var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');
module.exports.getGiocode= function(addr) {
  var options = { 
     format: 'json',
          query: { 
            address: addr ,
            key:key
          }
        };
       var log= http.getUrl("https://maps.googleapis.com/maps/api/geocode/json",options); 
       console.log("log",log);
       return log    
}
        
module.exports.getInfo=function(start, end) {
  var options = { 
          format: 'json',
          query: { 
            origin: start ,
            destination:end,
            key :key
          }
        };
        var log = http.getUrl("https://maps.googleapis.com/maps/api/directions/json?",options);
        console.log("log",log);
        return log

}      

module.exports.processing=function(process){
  return process.results[0].geometry.location;
}

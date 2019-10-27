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
            key :key,
            mode:"transit",
            departure_time:"now"
          }
        };
        var log = http.getUrl("https://maps.googleapis.com/maps/api/directions/json?",options);
        console.log("log",log);
        return log

}      

module.exports.getSubwayInfo=function(station){
    
    var log = http.getUrl("http://swopenapi.seoul.go.kr/api/subway/7a4e4c666c756c74333448716a7877/json/realtimeStationArrival/0/2/"+station,{format:"json"});
    console.log("log",log);
    return log
}

var secret = require('secret');
const key = secret.get('key');
const appKey=secret.get('appKey');
var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');
var secret = require('secret');
module.exports.getGiocode= function(addr) {
  var options = { 
     format: 'json',
          query: { 
            address: addr ,
            key:key
          }
        };
       var log= http.getUrl("https://maps.googleapis.com/maps/api/geocode/json",options); 
      //  console.log("log",log);
       return log    
}
        
module.exports.getInfo=function(startX,startY,endX,endY) {
    
    let options = { 
      format: 'json',
      query: { 
        version:1
      },
      headers:{
        appKey: appKey
      }
    };
    let body={
              //출발지 위경도 좌표입니다.
            startX : startX,
            startY : startY,
            //목적지 위경도 좌표입니다.
            endX : endX,
            endY : endY,
            //출발지, 경유지, 목적지 좌표계 유형을 지정합니다.
            reqCoordType : "WGS84GEO",
            resCoordType : "EPSG3857",
            //각도입니다.
            //출발지 명칭입니다.
            startName : "출발지",
            //목적지 명칭입니다.
            endName : "도착지"
      };
    var log= http.postUrl("https://apis.openapi.sk.com/tmap/routes/pedestrian",body,options); 
    // console.log("log",log);
    return log   
}      

module.exports.getSubwayInfo=function(station){
    var enc = encodeURI(station);
    var log = http.getUrl("http://swopenapi.seoul.go.kr/api/subway/7a4e4c666c756c74333448716a7877/json/realtimeStationArrival/0/100/"+enc,{format:"json"});
    console.log("http://swopenapi.seoul.go.kr/api/subway/7a4e4c666c756c74333448716a7877/json/realtimeStationArrival/0/100/"+enc,{format:"json"});
    return log
}

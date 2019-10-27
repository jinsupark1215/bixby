var tool = require("lib/apiTool.js")
var console = require('console')


module.exports.function = function explainOptimalRoute (directionRequested, stationRequested, sourcePoint) {  
  


  var startLocation ={
    lat : sourcePoint.point.latitude,
    lng : sourcePoint.point.longitude
  }
  var giocode = tool.getGiocode(stationRequested);
  var destLocation=""
  if(giocode.status=="OK"){
     destLocation  = giocode.results[0].geometry.location
  }
  var result = tool.getInfo(startLocation.lat+","+startLocation.lng, destLocation.lat+","+destLocation.lng);
  console.log("RESULT",result);
  if(stationRequested.charAt(stationRequested.length-1)=="역"){
    stationRequested= stationRequested.substring(0,stationRequested.length-1);
  }
 
  console.log("stationname", stationRequested)
  var stationInfo = tool.getSubwayInfo(stationRequested);
  console.log("stationInfo",stationInfo)
  return "hi"

  var routeInfo = []
  
  var wayToStation = {
    wayToStationName: wayToStationName,
    wayPointName: wayPointName,
    wayPointNumber: wayPointNumber,
    wayPointDuration: wayPointDuration
  }

  var curRouteInfo = {
    duration: duration,
    wayToStation: wayToStation, // 배열
    userArrivalTime: userArrivalTime
  }
  
  routeInfo.push(curRouteInfo)

  var arrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTimeLeft: arrivalTimeLeft
  }

  var station = {
    stationName: stationName,
    arrivalInfo: arrivalInfo // 배열
  }

  return {
    station: station,
    routeInfo: routeInfo, // 배열
  }
}

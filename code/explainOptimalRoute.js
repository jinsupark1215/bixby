var tool = require("lib/apiTool.js")
var console = require('console')


module.exports.function = function explainOptimalRoute (directionRequested, stationRequested, sourcePoint) {  
  

  var giocode = tool.getGiocode("역삼역")
  var location =""
  if(giocode.status=="OK"){
     location  = giocode.results[0].geometry.location
  }
  console.log("info",location);

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

module.exports.function = function explainOptimalRoute (directionRequested, stationRequested) {

  const console = require('console')
  console.log('ahha')


  

  return 'hi'


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

module.exports.function = function explainOptimalRoute (directionRequested, stationRequested) {
  var routeInfo = []

  

  var wayToStation = {
    wayToStationName: wayToStationName,
    wayPointName: wayPointName,
    wayPointNumber: wayPointNumber,
    wayPointDuration: wayPointDuration

  }

  var curRouteInfo = {
    duration: duration,
    wayToStation: wayToStation,
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
    arrivalInfo: arrivalInfo
  }

  return {
    station: station,
    routeInfo: routeInfo,
  }
}

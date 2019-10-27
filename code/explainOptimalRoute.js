module.exports.function = function explainOptimalRoute (directionRequested, stationRequested) {

  const console = require('console')
  console.log('ahha')

  var wayToStationName = '도보'
  var wayPointName = '역삼역'
  var wayPointDuration = 3
  var wayPointNumber = '';
  
  var duration = 3
  var userArrivalTime = '12:00'
  var arrivalTime = '12:03'
  var arrivalColor = 'Green'
  var arrivalTimeLeft = 6

  var stationName = '역삼역'

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

  var arrivalInfo = []
  var curArrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTimeLeft: arrivalTimeLeft
  }

  arrivalInfo.push(curArrivalInfo)

  var station = {
    stationName: stationName,
    arrivalInfo: arrivalInfo // 배열
  }

  return {
    station: station,
    routeInfo: routeInfo, // 배열
  }
}

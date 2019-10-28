var tool = require("lib/apiTool.js")
var console = require('console')



module.exports.function = function explainOptimalRoute (inputLine, inputStation, sourcePoint) {  
  var wayToStationName = 'img/walk.png'
  var wayPointName = '역삼역'
  var wayPointDuration = 3
  var wayPointNumber = '';
  
  var duration = 3
  var userArrivalTime = '12:00'
  var arrivalTime = '12:03'
  var arrivalColor = 'img/warning_red.png'
  var arrivalTimeLeft = 6

  var stationName = '역삼역'

  var routeInfo = {
    duration: duration,
    userArrivalTime: userArrivalTime
  }

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
    routeInfo: routeInfo,
  }
}

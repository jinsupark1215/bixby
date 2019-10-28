var tool = require("lib/apiTool.js")
var console = require('console')



module.exports.function = function explainOptimalRoute (inputLine, inputStation, sourcePoint) {  
  var wayToStationName = 'img/walk.png'
  var wayPointName = '역삼역'
  var wayPointDuration = 3
  var wayPointNumber = '';
  
  var duration = 3
  var userArrivalTime = '12:00'

  var stationName = '역삼역'

  var routeInfo = {
    duration: duration,
    userArrivalTime: userArrivalTime
  }

 

//진수 예 만든거
  var arrivalInfo = []

 var arrivalDirection = '신도림행'
  var nextStation = "강남"
  var arrivalTime = '12:03'
  var arrivalColor = 'img/warning_red.png'
  var arrivalTimeLeft = 6

  var curArrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTimeLeft: arrivalTimeLeft,
    arrivalDirection : arrivalDirection,
    nextStation : nextStation
  }
  arrivalInfo.push(curArrivalInfo)

   var arrivalDirection = '신도림행'
  var nextStation = "강남"
  var arrivalTime = '12:10'
  var arrivalColor = 'img/warning_red.png'
  var arrivalTimeLeft = 13

  var curArrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTimeLeft: arrivalTimeLeft,
    arrivalDirection : arrivalDirection,
    nextStation : nextStation
  }
  arrivalInfo.push(curArrivalInfo)

   var arrivalDirection = '잠실행'
  var nextStation = "선릉"
  var arrivalTime = '12:05'
  var arrivalColor = 'img/warning_red.png'
  var arrivalTimeLeft = 8

  var curArrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTimeLeft: arrivalTimeLeft,
    arrivalDirection : arrivalDirection,
    nextStation : nextStation
  }
  arrivalInfo.push(curArrivalInfo)

   var arrivalDirection = '신도림행'
  var nextStation = "강남"
  var arrivalTime = '12:11'
  var arrivalColor = 'img/warning_red.png'
  var arrivalTimeLeft = 14

  var curArrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTimeLeft: arrivalTimeLeft,
    arrivalDirection : arrivalDirection,
    nextStation : nextStation
  }
  arrivalInfo.push(curArrivalInfo)
//

  var station = {
    stationName: stationName,
    arrivalInfo: arrivalInfo // 배열
  }

  return {
    station: station,
    routeInfo: routeInfo,
  }
}

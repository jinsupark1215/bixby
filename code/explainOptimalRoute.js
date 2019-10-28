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
  var result = tool.getInfo(startLocation.lng,startLocation.lat,destLocation.lng,destLocation.lat);
  console.log("RESULT",result);
  if(stationRequested.charAt(stationRequested.length-1)=="역"){
    stationRequested= stationRequested.substring(0,stationRequested.length-1);
  }
  var stationInfo = tool.getSubwayInfo(stationRequested);
  console.log("stationInfo",stationInfo);
  var realtimeArrivalList=[];
  realtimeArrivalList= stationInfo.realtimeArrivalList;
  var d= new Date();
  d.setMinutes(d.getMinutes+result.totalTime);
  var routeInfo = {
    duration : result.totalTime+"분",
    userArrivalTime : d.getHours +":"+d.getMinutes+":"+d.getSeconds
  }
  for(var key in realtimeArrivalList){
    d= new Date();
    var timeLeft = realtimeArrivalList[key].barvlDt/60 + "분 " + ealtimeArrivalList[key].barvlDt%60 +"초";
    d.setSeconds(d.getSeconds+realtimeArrivalList[key].barvlDt);
    var arrivalTime = d.getHours +"시 "+d.getMinutes+"분 "+d.getHours+"초";
    var leftTime= result.totalTime 
  }

  var arrivalInfo = {
    arrivalTime: arrivalTime,
    arrivalColor: arrivalColor,
    arrivalTime: arrivalTimeLeft
  }
  
  var station = {
    stationName: stationName,
    arrivalInfo: arrivalInfo // 배열
  }

  return {
    station: station,
    routeInfo: routeInfo
  }
}

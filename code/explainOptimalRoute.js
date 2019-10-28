var tool = require("lib/apiTool.js")
var console = require('console')



module.exports.function = function explainOptimalRoute (inputLine, inputStation, sourcePoint) {  
  var startLocation ={
    lat : sourcePoint.point.latitude,
    lng : sourcePoint.point.longitude
  }
  var giocode = tool.getGiocode(inputStation);
  var destLocation=""
  if(giocode.status=="OK"){
     destLocation  = giocode.results[0].geometry.location
  }

  var result = tool.getInfo(startLocation.lng,startLocation.lat,destLocation.lng,destLocation.lat);
  console.log("RESULT",result);

  if(inputStation.charAt(inputStation.length-1)=="역"){
    inputStation= inputStation.substring(0,inputStation.length-1);
  }

  var stationInfo = tool.getSubwayInfo(inputStation);
  console.log("stationInfo",stationInfo);
  var realtimeArrivalList=[];
  realtimeArrivalList= stationInfo.realtimeArrivalList;
  var d= new Date();

  d.setMinutes(d.getMinutes()+result.features[0].properties.totalTime);
  var routeInfo = {
    duration : result.features[0].properties.totalTime+"분",
    userArrivalTime : d.getHours() +":"+d.getMinutes()+":"+d.getSeconds()
  }

  var arrivalInfos =[];
  var obj = {}

  for(var key in realtimeArrivalList){
    if(realtimeArrivalList[key].subwayId-1000!=inputLine)continue;
    d= new Date();
    
    var timeLeft = parseInt(realtimeArrivalList[key].barvlDt/60) + "분 " + realtimeArrivalList[key].barvlDt%60 +"초";
    
    d.setSeconds(d.getSeconds()+realtimeArrivalList[key].barvlDt);
    
    var arrivalTime = d.getHours()+"시 "+d.getMinutes()+"분 "+d.getHours()+"초";
    
    var arraivalColor;
    var flag =realtimeArrivalList[key].barvlDt/60-result.totalTime;
    if(flag <=-3 ){
      arraivalColor="RED";
    }else if(flag>=3){
      arraivalColor="BLUE";
    }else {
      arraivalColor="YELLOW";
    }
    var nextStation = realtimeArrivalList[key].statnTid;
    var arrivalDirection = realtimeArrivalList[key].trainLineNm;
    obj ={
      arrivalTime: arrivalTime,
      arraivalColor: arraivalColor,
      arrivalDirection: arrivalDirection,
      nextStation: nextStation,
      timeLeft: timeLeft
    };
    arrivalInfos.push(obj);

  }
  
  var station = {
    arrivalInfo : arrivalInfos,
    stationName : inputStation,
    line : inputLine
  };
  var optimalRouteResult ={
    station : station,
    routeInfo : routeInfo 
  };
  console.log("finalResult",optimalRouteResult);
  return optimalRouteResult;
}

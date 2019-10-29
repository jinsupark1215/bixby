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
  
  d.setHours(d.getHours()+9);
  console.log("currentTime",d);
  d.setMinutes(d.getMinutes()+parseInt(result.features[0].properties.totalTime/60));
  var routeInfo = {
    duration : parseInt(result.features[0].properties.totalTime/60)+"분",
    userArrivalTime : d.getHours() +":"+d.getMinutes()+":"+d.getSeconds()
  }
  var arrivalInfos =[];
  var obj = {}

  for(var key in realtimeArrivalList){
    var nowTime = new Date();
    nowTime.setHours(nowTime.getHours()+9);
    if(realtimeArrivalList[key].subwayId-1000!=inputLine) {
      obj ={
        arrivalDirection: "입력하신 역은 " + inputLine + "호선이 없습니다."
      };
      arrivalInfos.push(obj);
      continue;
    }
    var timeLeft = parseInt(realtimeArrivalList[key].barvlDt/60) + "분 " + realtimeArrivalList[key].barvlDt%60 +"초";
    
    nowTime.setMinutes(nowTime.getMinutes()+ parseInt(realtimeArrivalList[key].barvlDt/60));
    nowTime.setSeconds(nowTime.getSeconds() + realtimeArrivalList[key].barvlDt%60);
    console.log("curTime",nowTime);
   
    var arrivalTime = nowTime.getHours()+"시 "+nowTime.getMinutes()+"분 "+nowTime.getHours()+"초";
    
    var arrivalColor;
    
    var flag = parseInt(realtimeArrivalList[key].barvlDt/60)-parseInt(result.features[0].properties.totalTime/60);
    
    if(flag <=-3 ){
      arrivalColor="RED";
    }else if(flag>=3){
      arrivalColor="BLUE";
    }else {
      arrivalColor="YELLOW";
    }
    var nextStation = realtimeArrivalList[key].statnTid;
    var arrivalDirection = realtimeArrivalList[key].trainLineNm;
    obj ={
      arrivalTime: arrivalTime,
      arrivalColor: arrivalColor,
      arrivalDirection: arrivalDirection,
      nextStation: nextStation,
      arrivalTimeLeft: timeLeft
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

var stations = require('../json/stationID');
var console = require('console')

module.exports.getStationName= function(stationName) {
  var stationRealName = "";
  stations.stationName.forEach( function(station) {
    var str = station.STATN_NM+""
    if(str == stationName) {
      stationRealName = str
      console.log("위치로그", stationRealName)
    }
  })

  if(stationRealName == ""){
    stations.stationName.forEach( function(station) {
    var str = station.STATN_NM+""
    if(str.match(stationName)){
      stationRealName = str
      console.log("위치로그2", stationRealName)
    }
  })
  }
  return stationRealName;
} 
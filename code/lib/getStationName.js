var stations = require('../json/stationID');
var console = require('console')

module.exports.getStationName= function(stationID) {
  console.log(stations)
  var stationName = '';
  stations.stationName.forEach( function(station) {
    if(station.STATN_ID == stationID) {
      stationName = station.STATN_NM
    }
  })
  return stationName
}

var console = require('console')

module.exports.getRemainingTime= function(key) {
  var remainTime = "";
  
  if(key.barvlDt == 0) {
    remainTime = key.arvlMsg2
  }
  else {
    remainTime = parseInt(key.barvlDt/60) + "분 " + key.barvlDt%60 +"초 후 도착"
  }
    console.log('getStationLeftTime', remainTime)
  return remainTime
}
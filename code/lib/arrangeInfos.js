var console = require('console')

module.exports.arrangeInfos= function(infos) {
  var arrivalInfos = []
  var arrivalUps = []
  var arrivalDowns = []

  infos.forEach( function(info) {
    var arrivalInfo = {
        arrivalTime: info.arrivalTime,
        arrivalColor: info.arrivalColor,
        arrivalDirection: info.arrivalDirection,
        nextStation: info.nextStation,
        arrivalTimeLeft: info.arrivalTimeLeft,
      }
    if(info.headingFor == "상행" || info.headingFor == "외선") {
      arrivalUps.push(arrivalInfo);
    }
    else {
      arrivalDowns.push(arrivalInfo);
    }
  })

  if(arrivalUps.length > 1) {
    arrivalInfos.push(arrivalUps[0]);
    arrivalInfos.push(arrivalUps[1]);
  }
  else {
    arrivalInfos.push(arrivalUps[0]);
    arrivalInfos.push();
  }

  if(arrivalDowns.length > 1) {
    arrivalInfos.push(arrivalDowns[0]);
    arrivalInfos.push(arrivalDowns[1]);
  }
  else {
    arrivalInfos.push(arrivalDowns[0]);
    arrivalInfos.push();
  }

  return arrivalInfos
}
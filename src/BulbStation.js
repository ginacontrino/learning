

exports.relieveDuty = function (vehicle, day) {



  var offDuty = [];
  var onDuty = [];


var onDutyCount = 0;

  for (var i = 1; i <= vehicle["numRangers"]; i++) {


    var thisRanger = vehicle["ranger" + i];

    if (thisRanger["dayOff"] !== day)
    {

      onDutyCount++;
      onDuty.push(thisRanger);

    }
    else
    {
      offDuty.push(thisRanger);
      var offDutyRanger = thisRanger;
     }

     delete vehicle["ranger" + i];
  }

  for (var x = 1; x <=  onDuty.length; x++) {

    vehicle["ranger" + x] = onDuty[x - 1];

  }
  vehicle.numRangers = onDuty.length;

  return onDuty;
};

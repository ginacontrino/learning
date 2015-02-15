exports.addRanger = function(location, name, skillz, station) {

  location.numRangers++;

  location["ranger" + location["numRangers"]] = {
    name: name,
    skillz: skillz,
    station: station
   };

};


//


//exports.addRanger = function(location, newRanger) { //name, skillz, station){

  //location.numRangers++;
  //location["ranger"] = newRanger;
  // location["ranger"] = {
  //   name: newRanger.name,
  //   skillz: newRanger.skillz,
  //   station: newRanger.station
  // };

//};


//+ location["numRanger"]

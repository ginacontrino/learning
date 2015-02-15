
var bulbStation = require("../src/BulbStation");

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};


  describe("Functions As Properties", function() {


    it("should put the off-duty rangers into array 'offDuty'", function () {

      var vehicle = {
        type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
        ranger1: { name: "Gregg Pollack",  skillz: "Lasering",         dayOff: "Friday"},
        ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
        ranger3: { name: "Ashley Smith",   skillz: "Torpedoing",       dayOff: "Friday"},
        ranger4: { name: "Mark Krupinski", skillz: "Sniping",          dayOff: "Wednesday"},
        numRangers: 4
      };

      expect(bulbStation.relieveDuty(vehicle, "Friday").length).toBe(2);
    });

    it("should put the on-duty rangers into array 'onDuty' ", function () {

      var vehicle = {
        type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
        ranger1: { name: "Gregg Pollack",  skillz: "Lasering",         dayOff: "Friday"},
        ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
        ranger3: { name: "Ashley Smith",   skillz: "Torpedoing",       dayOff: "Friday"},
        ranger4: { name: "Mark Krupinski", skillz: "Sniping",          dayOff: "Wednesday"},
        numRangers: 4
      };

      expect(bulbStation.relieveDuty(vehicle, "Friday").length).toBe(2);
    });

    it('should renumber the rangers who remain on duty', function(){

      // arrange
      var vehicle = {
        type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
        ranger1: { name: "Gregg Pollack",  skillz: "Lasering",         dayOff: "Friday"},
        ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
        ranger3: { name: "Ashley Smith",   skillz: "Torpedoing",       dayOff: "Friday"},
        ranger4: { name: "Mark Krupinski", skillz: "Sniping",          dayOff: "Wednesday"},
        numRangers: 4
      };



      // act
      var result = bulbStation.relieveDuty(vehicle, "Friday");



      // assert
      var expectedResult = [
        { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
        { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"}
      ];

      expect(result).toEqual(expectedResult);

      var expectedVehicle = {
        type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
        ranger1: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
        ranger2: { name: "Mark Krupinski", skillz: "Sniping",          dayOff: "Wednesday"},
        numRangers: 2
      };

      expect(vehicle).toEqual(expectedVehicle);
    });

    });

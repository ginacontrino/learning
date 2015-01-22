var buildingObjects = require('../src/BuildingObjects')


var superBlinders = [
["Firestorm", 4000],
["Solar Death Ray", 6000],
["Supernova", 12000]
];


describe("Lighthouse", function() {

//  it("should be possible to dynamically add properties to object", function() {


  //  buildingObjects.addRanger(lighthouseRock);

    //expect(lighthouseRock.ranger).toEqual(typeof );
  //});


  it("should add rangers as complete objects to lighthouseRock", function() {



    var lighthouseRock = {
      gateClosed: true,
      weaponBulbs: superBlinders,
      capacity: 30,
      secretPassageTo: "Underwater Outpost",
      numRangers: 0
    };

    buildingObjects.addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

    expect(lighthouseRock.ranger1.skillz).toBe("bomb defusing");
  });


  it("numRangers should increase when addRanger adds a ranger", function() {

    var lighthouseRock = {
      gateClosed: true,
      weaponBulbs: superBlinders,
      capacity: 30,
      secretPassageTo: "Underwater Outpost",
      numRangers: 0
    };

    buildingObjects.addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

    expect(lighthouseRock.numRangers).toBe(1);
  });

  it("should add number to lighthouseRock.ranger when numRanger increases", function() {

    var lighthouseRock = {
      gateClosed: true,
      weaponBulbs: superBlinders,
      capacity: 30,
      secretPassageTo: "Underwater Outpost",
      numRangers: 0
    };

    expect(lighthouseRock["ranger1"]).toBeUndefined();

    var newRanger = {
      name: "Christine Wong",
      skillz: "bomb defusing",
      station:  1
    }

    buildingObjects.addRanger(lighthouseRock, newRanger.name, newRanger.skillz, newRanger.station);

    expect(lighthouseRock["ranger1"]).toEqual(newRanger);

  });

});




//var newRanger = {
  //name: "Christine Wong",
  // skillz: "bomb defusing",
  //station: 1

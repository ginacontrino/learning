var calc = require("../src/SumOfEvenNumbers");


  it("should make array even and then sum", function() {

    //assemble
    var myArray = [1,2,3,4,5,6,7,8,20];

    // act
    var result = calc.sumArray(myArray);

    // assert
    expect(result).toBe(40);

  });

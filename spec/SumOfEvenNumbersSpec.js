var calc = require("../src/SumOfEvenNumbers");


  it("should sum array of even numbers", function() {

    //assemble
    var myArray = [1,2,3,4,5,6,7,8,20];

    // act
    var result = calc.sumArrayEven(myArray);

    // assert
    expect(result).toBe(40);

  });

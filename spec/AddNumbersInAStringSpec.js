
/**
 *  Testing with Jasmine
 */

var calculator = require('../src/AddNumbersInAString');

describe ("Calculator", function () {

  it ("should add the numbers from array", function () {

    var myArray = ["4", "5", "5", "5", "12"];

    var expectedResult = 31;

    expect(calculator.sum(myArray)).toBe(expectedResult);

  });


  it ("should add the numbers from string", function () {

    var myString =  '4,5,5,5,12';

    var expectedResult = 31;

    expect(calculator.sum(myString)).toBe(expectedResult);

  });


  it ("should add the numbers from string even with strange spaces", function () {

    var myString =  '2,3 ,  5, 6';

    var expectedResult = 16;

    expect(calculator.sum(myString)).toBe(expectedResult);

  });


  it ("should add the numbers from decimals string even with strange spaces", function () {

    var myString =  '2.5 ,  2.5';

    var expectedResult = 5;

    expect(calculator.sum(myString)).toBe(expectedResult);

  });
});


describe ("Calculator Helper Functions", function () {


  it ("should convert string of numbers into array of numbers", function () {

    var string =  '4,5,5,5,12';

    expectedResult = ["4", "5", "5", "5", "12"];

    expect(calculator.makeArray(string)).toEqual(expectedResult);

  });

});

exports.sumArrayEven = function(myArray) {

  var total = 0;

    for (var index=0; index<myArray.length; index++)

    {

      var currentNumber = myArray[index];

      if ( currentNumber % 2==0)

      {
        total += currentNumber;

      }

    }

    return total;
};

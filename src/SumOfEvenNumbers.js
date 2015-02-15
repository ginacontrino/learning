module.exports = {


sumArray: function(myArray) {


  var total = this.getEvenArray(myArray).reduce(function(prev, curr)
  {

    return prev + curr;

  });

  return total;
},



isEvenNumber: function(number) {

  return number % 2 === 0;

},


filterArray: function(myArray,filter) {

  var filtered = myArray.filter(filter);
  return filtered;

},


getEvenArray: function(myArray) {

  return this.filterArray(myArray, this.isEvenNumber);

}

};

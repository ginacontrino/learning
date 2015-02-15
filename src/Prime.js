function Prime() {
  this.rangeArray = [];
}



Prime.prototype = {

  stringAllUpTo: function(max) {

    return this.allUpTo(max).join(', ');

  },



  allUpTo: function(max) {

    return this.range(max).filter(this.isPrime);

  },



  isPrime: function(number) {

    // special case: 1 is not a prime
    if (number === 1)
    {
      return false;
    }

    // Loop through all numbers <= the squareroot
    // of number and test if they divide evenly
    // into the number; if so: not prime
    q = Math.sqrt(number);

    for (var i = 2; i <= q; i++)
    {
      if (number % i === 0)
      {
        return false;
      }
    }

    // otherwise: prime
    return true;

  },



  range: function(max) {

    this.rangeArray = [];

    for (var i = 1; i <= max; i++)
    {
      this.rangeArray.push(i);
    }

    return this.rangeArray;
  }

};

module.exports = new Prime();

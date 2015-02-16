function Prime() {
  this.rangeArray = [];
}



Prime.prototype = {

 /**
  * Returns a comma seperated list of all Prime numbers up to n
  *
  * @param integer max
  * @return string
  */
  stringAllUpTo: function(max) {

    return this.allUpTo(max).join(', ');

  },


 /**
  * Returns an array of all Prime numbers up to n
  *
  * @param integer max
  * @return array
  */
  allUpTo: function(max) {

    return this.range(max).filter(this.isPrime);

  },


 /**
  * Returns whether number is prime or not
  *
  * @param integer number
  * @return boolean
  */
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


 /**
  * Returns an array of numbers from 1 to max
  *
  * @param integer max
  * @return array
  */
  range: function(max) {

    this.rangeArray = [];

    for (var i = 1; i <= max; i++)
    {
      this.rangeArray.push(i);
    }

    return this.rangeArray;
  },


 /**
  * Returns an array of n Prime numbers
  *
  * @param integer max
  * @return array
  */
  getFirstNPrimes: function(max) {

      max = +max;

      this.primesArray = [];


      for ( var count = 2; this.primesArray.length < max ; count++ )
      {

        if (this.isPrime(count) === true)
        {
          this.primesArray.push(count);
        }
      }

      return this.primesArray;

  },


};

module.exports = new Prime();

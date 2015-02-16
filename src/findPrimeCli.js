#! /usr/local/bin/node

/*
  Prime Main File
  ===============

  Gives the first n primes as array.
  So to get the first 5 primes, enter:

    > $ node src/findPrimeCli.js 5


  Which outputs the following array:

    > [ 2, 3, 5, 7, 11 ]

*/

var Prime = require('./Prime');
console.log(Prime.getFirstNPrimes(process.argv[2]));

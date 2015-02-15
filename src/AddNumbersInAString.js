module.exports = {

/**
 * makes an array out of the input
 *
 * @param input -> array or string
 */
  makeArray: function(input) {

    if (typeof input === 'object') {
      return input;
    }

    return input.split(",");
  },


/**
 * sums up the numbers of the input
 *
 * @param input -> array or string
 */
  sum: function(input) {

      return this.makeArray(input).reduce(function(previous, current) {
         return (+previous) + (+current);
      });
  }

};

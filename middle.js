const middle = function(array) {
  let output = [];

  if (array.length < 3) {
    return output;
  }

  if (array.length % 2 === 0) {
    output = array.slice(array.length / 2 - 1, array.length / 2 + 1);
    return output;
  } else {
    output = array.slice(array.length / 2 - .5, array.length / 2 + .5);
    return output;
  }
};

module.exports = middle;
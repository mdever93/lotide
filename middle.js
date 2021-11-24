const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};

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

console.log(middle([1]));
console.log(middle([1, 2]));

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

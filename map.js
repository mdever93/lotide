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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word + word);
console.log(results2);

const numbers = [1, 2, 3, 4, 5];

const results3 = map(numbers, num => num * 2);
console.log(results3);

const results4 = map(numbers, num => num + " * 2 is equal to " + num * 2);
console.log(results4);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom' ]);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);
assertArraysEqual(results4,
  [
    '1 * 2 is equal to 2',
    '2 * 2 is equal to 4',
    '3 * 2 is equal to 6',
    '4 * 2 is equal to 8',
    '5 * 2 is equal to 10'
  ]
);

module.exports = map;
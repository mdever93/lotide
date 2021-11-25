const eqObjects = function(object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);

  if (keysArray1.length !== keysArray2.length) {
    return false;
  }
  for (const key1 of keysArray1) {
    if ((Array.isArray(object1[key1]) && (Array.isArray(object2[key1])))) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 2, 3], ["1", 2, 3]);
assertObjectsEqual(["1", "2", "3"], ["1", "2", "3"]);
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
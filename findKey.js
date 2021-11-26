const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const keysArray = Object.keys(object);
  for (const key of keysArray) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

findKey(object1, x => x.stars === 2);

assertEqual(findKey(object1, x => x.stars === 2), "noma");
assertEqual(findKey(object1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(object1, x => x.stars === 1), "Blue Hill");
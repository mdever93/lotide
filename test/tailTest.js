// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// const oneElement = [1];
// assertEqual(tail(oneElement).length, 0);
// assertEqual(oneElement.length, 1);


// const emptyArray = [];
// assertEqual(tail(emptyArray).length, 0);
// assertEqual(emptyArray.length, 0);

const assert = require('chai').assert;
const tail   = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const oneElement = [1];
const emptyArray = [];

describe("#tail", () => {
  it(`returns ['Lighthouse', 'Labs'] for ${words}`, () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail(oneElement), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail(emptyArray), []);
  });
});
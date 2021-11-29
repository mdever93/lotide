const assertEqual = require('../assertEqual')
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const oneElement = [1];
assertEqual(tail(oneElement).length, 0);
assertEqual(oneElement.length, 1);


const emptyArray = [];
assertEqual(tail(emptyArray).length, 0);
assertEqual(emptyArray.length, 0);
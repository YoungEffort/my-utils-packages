const _ = require('lodash');
const debug = require('debug');
const debugA = debug('avgA:');
const debugB = debug('avgB:');
const testFixture = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 使用lodash sum求和
function avgA(arr) {
  return _.sum(arr) / arr.length;
}

// 使用原生reduce 求和
function avgB(arr) {
  return arr.reduce((cal, curr) => cal + curr, 0) / arr.length;
}

const range = _.range(0, 10000000, 1);
console.log(range)
range.forEach((index) => {
  const result = avgA(testFixture);
  if (index % 1000000 === 0) {
    debugA('time %d', index);
  }
})

range.forEach((index) => {
  const result = avgB(testFixture);
  if (index % 1000000 === 0) {
    debugB('time %d', index);
  }
})
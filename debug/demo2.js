const _ = require('lodash');
const debug = require('debug');
const debugA = debug('A:');
const debugB = debug('B:');

// 当环境为production时，所有的debugA均不会输出

if (process.env.NODE_ENV === 'production') {
  debugA.enabled = false;
}

debugA('hello world');
debugB('I am new to debug');

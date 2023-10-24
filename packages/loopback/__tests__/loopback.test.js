'use strict';

const loopback = require('..');
const assert = require('assert').strict;

assert.strictEqual(loopback(), 'Hello from loopback');
console.info('loopback tests passed');

var { inspect }  = require('util');
 var assert = require('assert');

const obj = { a: 1 };
const obj2 = { b: 2 };
const weakSet = new WeakSet([obj, obj2]);

console.log(inspect(weakSet, { showHidden: true }));

const o1 = {
    b: [2, 3, 1],
    a: '`a` comes before `b`',
    c: new Set([2, 3, 1])
  };
  console.log(inspect(o1, { sorted: true }));
  
  console.log(inspect(o1, { sorted: (a, b) => b.localeCompare(a) }));
  
  
  const o2 = {
    c: new Set([2, 1, 3]),
    a: '`a` comes before `b`',
    b: [2, 3, 1]
  };
  assert.strict.equal(
    inspect(o1, { sorted: true }),
    inspect(o2, { sorted: true })
  );
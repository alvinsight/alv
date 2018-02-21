import { lerp, clamp } from '../mate';

const test = require('tape');

test('Mate, Math-related utils', t => {
  test('Lerp', t => {
    t.equal(lerp(50, 100, 0.5), 75);
    t.end();
  });

  test('Constrain a value using clamp()', t => {
    t.equal(clamp(3, 0, 1), 1);
    t.end();
  });

  t.end();
});

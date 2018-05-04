import { lerp, clamp, map } from '../src/math';
import test from 'tape';

test('Mate, Math-related utils', t => {
  t.equal(lerp(50, 100, 0.5), 75, 'Lerp');

  t.equal(clamp(3, 0, 1), 1, 'Constrain a value using clamp()');

  t.equal(map(50, 0, 100, 0, 25), 12.5, 'Map one range to another');

  t.end();
});

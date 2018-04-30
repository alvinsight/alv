import * as Rnd from '../rnd';
import test from 'tape';

test('Random number utils', t => {
  t.is(typeof Rnd.random(10, 20), 'number', 'Random float in a range');
  t.is(typeof Rnd.randomInt(10, 20), 'number', 'Random integer in a range');

  let testArray = [1, 2, 3];
  let pickedValue = Rnd.pick(testArray);

  t.equal(
    testArray.includes(pickedValue),
    true,
    'Randomly picks an item in an array'
  );

  t.end();
});

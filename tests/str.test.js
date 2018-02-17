import { addLeadingZeros, slugify } from '../str';
const test = require('tape');

test('String utils', t => {
  test('Add leading zeros', t => {
    t.equal(addLeadingZeros(6, 2), '006', 'two leading zeros, 1 digit');
    t.equal(addLeadingZeros(34, 2), '034', 'two leading zeros, 2 digits');
    t.end();
  });

  test('Turns a string into a "slug"', t => {
    let str = " Oh  Oh  I'm Yours ";
    t.equal(slugify(str), 'oh-oh-i-m-yours');
    t.end();
  });

  t.end();
});

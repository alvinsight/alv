import { addLeadingZeros, slugify, queryStringParameters } from '../str';
import test from 'tape';

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

  test('Extract values from a query string', t => {
    let url = 'http://www.myurl.com/index.html?debug=true&slideNumber=3';
    let params = queryStringParameters(url);

    t.true(params.has('debug'), 'Can check if a parmeter is part of the query');

    t.equal(params.get('slideNumber'), '3', "Extracts a parameter's value");
    t.end();
  });

  t.end();
});

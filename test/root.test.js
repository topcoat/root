import test from 'ava';
import resin from 'resin';
import fs from 'fs';

test('compilation', t => {
  const input = '../src/root.css';
  const expected = fs.readFileSync('./example.expected.css','utf-8').trim();
  return resin({
    src: input,
    vars: true,
    extend: true,
  }).then(result => {
    t.is(result.css.trim(), expected);
  });
});
test('replaces default with mobile variables', t => {
  const input = '../src/root.css';
  const expected = fs.readFileSync('./mobile.expected.css','utf-8').trim();
  return resin({
    src: input,
    vars: true,
    extend: true,
    prepend: 'topcoat-variables-mobile'
  }).then(result => {
    t.is(result.css.trim(), expected);
  });
});

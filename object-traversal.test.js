const getValueFromObject = require('./object-traversal');

const obj = { x: { y: { z: "a" } } };

test('gets correct value from object', () => {
  const key = "x/y/z";

  expect(getValueFromObject(key, obj)).toEqual('a');
});

test('throws if value is not found', () => {
  const key = "x/n/z";

  expect(() => {
    getValueFromObject(key, obj);
  }).toThrow();
});
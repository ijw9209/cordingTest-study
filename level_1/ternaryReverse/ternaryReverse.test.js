const ternaryReverse = require('./ternaryReverse');

test('3진법 뒤집기 1번 Case ', () => {
  expect(ternaryReverse(45)).toEqual(7);
});

test('3진법 뒤집기 2번 Case ', () => {
  expect(ternaryReverse(125)).toEqual(229);
});




const primeMaker = require('./primeMaker');

test('1번 Case ', () => {
  expect(primeMaker([1,2,3,4])).toEqual(1);
});

test('2번 Case ', () => {
  expect(primeMaker([1,2,7,6,4])).toEqual(4);
});


const minValCreate = require('./minValCreate');

test('최솟값 만들기 1번 Case ', () => {
  expect(minValCreate([1, 4, 2], [5, 4, 4])).toEqual(29);
});


test('최솟값 만들기 2번 Case ', () => {
  expect(minValCreate([1,2], [3,4])).toEqual(10);
});



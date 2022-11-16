const budget = require('./budget');

test('예산 1번 Case ', () => {
  expect(budget([1,3,2,5,4],9)).toEqual(3);
});


test('예산 2번 Case ', () => {
  expect(budget([2,2,3,3], 10)).toEqual(4);
});



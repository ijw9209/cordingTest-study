const nextNumber = require('./nextNumber');

test('다음에 올 숫자 1번 Case ', () => {
  expect(nextNumber([1, 2, 3, 4])).toBe(5);
});


test('다음에 올 숫자 2번 Case ', () => {
  expect(nextNumber([2, 4, 8])).toBe(16);
});



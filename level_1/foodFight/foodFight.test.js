const foodFight = require('./foodFight');

test('푸드파이트 대회 1번 Case ', () => {
  expect(foodFight([1, 3, 4, 6])).toBe("1223330333221");
});


test('푸드파이트 대회 2번 Case ', () => {
  expect(foodFight([1, 7, 1, 2]	)).toBe("111303111");
});



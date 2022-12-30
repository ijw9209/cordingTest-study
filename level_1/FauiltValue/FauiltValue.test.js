const FauiltValue = require('./FauiltValue');

test('푸드파이트 대회 1번 Case ', () => {
  expect(FauiltValue(5,[2, 1, 2, 6, 2, 4, 3, 3])).toBe([3,4,2,1,5]);
});


test('푸드파이트 대회 2번 Case ', () => {
  expect(FauiltValue(4, [4,4,4,4,4])).toBe([4,1,2,3]);
});

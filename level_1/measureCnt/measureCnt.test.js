const measureCnt = require('./measureCnt');

test('약수의 개수와 덧셈 1번 Case ', () => {
  expect(measureCnt(13, 17)).toBe(43);
});


test('약수의 개수와 덧셈 2번 Case ', () => {
  expect(measureCnt(24, 27)).toBe(52);
});



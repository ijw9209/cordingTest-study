const overlapNum = require('./overlapNum');

test('중복된 숫자 개수 CASE 1', () => {
  expect(overlapNum([1, 1, 2, 3, 4, 5], 1)).toBe(2);
});

test('중복된 숫자 개수 CASE 2', () => {
    expect(overlapNum([0, 2, 3, 4], 1)).toBe(0);
});
const slicePaper = require('./slicePaper');

test('종이 자르기 Case 1', () => {
  expect(slicePaper(2, 2)).toBe(3);
});

test('종이 자르기 Case 2', () => {
    expect(slicePaper(2, 5)).toBe(9);
});
const sevenCnt = require('./sevenCnt');

test('7의 개수 CASE 1', () => {
  expect(sevenCnt([7, 77, 17])).toBe(4);
});

test('7의 개수 CASE 2', () => {
    expect(sevenCnt([10, 29])).toBe(0);
});
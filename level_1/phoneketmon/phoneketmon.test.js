const phoneketmon = require('./phoneketmon');

test('폰켓몬 CASE 1 ', () => {
  expect(phoneketmon([3,1,2,3])).toBe(2);
});

test('폰켓몬 CASE 2', () => {
    expect(phoneketmon([3,3,3,2,2,4])).toBe(3);
});
test('폰켓몬 CASE 3', () => {
    expect(phoneketmon([3,3,3,2,2,2])).toBe(2);
});
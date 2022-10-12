const lambSkewers = require('./lambSkewers');

test('양꼬치 10개 음료 3개 결과 124000', () => {
  expect(lambSkewers(10, 3)).toBe(124000);
});

test('양꼬치 64개 음료 6개 결과 768000', () => {
    expect(lambSkewers(64, 6)).toBe(768000);
});
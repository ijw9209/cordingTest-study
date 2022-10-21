const quotient = require('./quotient');

test('양꼬치 10개 음료 3개 결과 124000', () => {
  expect(quotient(10, 5)).toBe(2);
});

test('양꼬치 64개 음료 6개 결과 768000', () => {
    expect(quotient(7, 2)).toBe(3);
});
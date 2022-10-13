const oddEven = require('./oddEven');

test('홀수면 "Odd"', () => {
  expect(oddEven(3)).toBe("Odd");
});

test('짝수면 "Even"', () => {
    expect(oddEven(4)).toBe("Even");
});
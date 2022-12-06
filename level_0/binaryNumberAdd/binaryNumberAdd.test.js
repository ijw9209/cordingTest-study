const lambSkewers = require('./binaryNumberAdd');

test('이진수 더하기 CASE 1', () => {
  expect(binaryNumberAdd("10","11")).toBe("101");
});

test('이진수 더하기 CASE 2', () => {
    expect(binaryNumberAdd("1001","1111")).toBe("11000");
});
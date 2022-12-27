const numberpartner = require('./numberpartner');

test('숫자 짝궁 1번 Case ', () => {
  expect(numberpartner("100","2345")).toBe("-1");
});
test('숫자 짝궁 2번 Case ', () => {
  expect(numberpartner("100","203045")).toBe("0");
});
test('숫자 짝궁 3번 Case ', () => {
  expect(numberpartner("100","123450")).toBe("10");
});
test('숫자 짝궁 4번 Case ', () => {
  expect(numberpartner("12321","42531")).toBe("321");
});
test('숫자 짝궁 5번 Case ', () => {
  expect(numberpartner("5525","1255")).toBe("552");
});


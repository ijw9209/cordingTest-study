const nearString = require('./nearString');

test('최소직사각형 1번 Case ', () => {
  expect(nearString("banana")).toBe([-1, -1, -1, 2, 2, 2]);
});


test('최소직사각형 2번 Case ', () => {
  expect(nearString("foobar")).toBe([-1, -1, 1, -1, -1, -1]);
});


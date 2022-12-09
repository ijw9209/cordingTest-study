const nearString = require('./nearString');

test('가장 가까운 같은 글자 1번 Case ', () => {
  expect(nearString("banana")).toBe([-1, -1, -1, 2, 2, 2]);
});


test('가장 가까운 같은 글자 2번 Case ', () => {
  expect(nearString("foobar")).toBe([-1, -1, 1, -1, -1, -1]);
});


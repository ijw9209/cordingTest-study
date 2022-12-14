const Knight = require('./Knight');

test('기사단원의 무기 1번 Case ', () => {
  expect(Knight(5,3,2)).toBe(10);
});


test('기사단원의 무기 2번 Case ', () => {
  expect(Knight(10,3,2)).toBe(21);
});



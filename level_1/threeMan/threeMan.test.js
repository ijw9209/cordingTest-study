const threeMan = require('./threeMan');

test('삼총사 1번 Case ', () => {
  expect(threeMan([-2, 3, 0, 2, -5])).toEqual(2);
});

test('삼총사 2번 Case ', () => {
  expect(threeMan([-3, -2, -1, 0, 1, 2, 3])).toEqual(5);
});

test('삼총사 3번 Case ', () => {
  expect(threeMan([-1, 1, -1, 1])).toEqual(0);
});




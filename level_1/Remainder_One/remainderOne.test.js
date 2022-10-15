const remainderOne = require('./remainderOne');

test('1번 Case ', () => {
  expect(remainderOne(10)).toEqual(3);
});

test('2번 Case ', () => {
  expect(remainderOne(12)).toEqual(11);
});




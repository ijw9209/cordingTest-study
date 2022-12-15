const fruteMerchant = require('./fruteMerchant');

test('과일장수 1번 Case ', () => {
  expect(fruteMerchant(3,	4,[1, 2, 3, 1, 2, 3, 1])).toBe(8);
});


test('과일장수 2번 Case ', () => {
  expect(fruteMerchant(4,	3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toBe(33);
});



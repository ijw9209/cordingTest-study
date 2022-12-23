const smallSizeString = require('./smallSizeString');

test('크기가 작은 부분문자열 1번 Case ', () => {
  expect(smallSizeString("3141592","271")).toEqual(2);
});

test('크기가 작은 부분문자열 2번 Case ', () => {
  expect(smallSizeString("500220839878","7")).toEqual(8);
});
test('크기가 작은 부분문자열 3번 Case ', () => {
  expect(smallSizeString("10203","15")).toEqual(3);
});


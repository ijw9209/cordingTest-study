const donothaveNumber = require('./donothaveNumber');

test('없는 숫자 더하기 1번 Case ', () => {
  expect(donothaveNumber([1,2,3,4,6,7,8,0])).toEqual(14);
});


test('없는 숫자 더하기 2번 Case ', () => {
  expect(donothaveNumber([5,8,4,0,6,7,9])).toEqual(6);
});



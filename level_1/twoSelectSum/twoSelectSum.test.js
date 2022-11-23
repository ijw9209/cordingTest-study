const twoSelectSum = require('./twoSelectSum');

test('두개 뽑아서 더하기 1번 Case ', () => {
  expect(twoSelectSum([2,1,3,4,1])).toEqual([2,3,4,5,6,7]);
});

test('두개 뽑아서 더하기 2번 Case ', () => {
  expect(twoSelectSum([5,0,2,7])).toEqual([2,5,7,9,12]);
});




const dotProduct = require('./dotProduct');

test('내적 1번 Case ', () => {
  expect(dotProduct([1,2,3,4],[-3,-1,0,2])).toEqual(3);
});


test('내적 2번 Case ', () => {
  expect(dotProduct([-1,0,1], [1,0,-1])).toEqual(-2);
});



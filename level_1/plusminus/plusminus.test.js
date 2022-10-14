const plusminus = require('./plusminus');

test('1번 Case ', () => {
  expect(plusminus([4,7,12],[true,false,true])).toEqual(9);
});


test('2번 Case ', () => {
  expect(plusminus([1,2,3],[false,false,true])).toEqual(0);
});



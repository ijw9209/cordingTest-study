const plusminus = require('./plusminus');

test('홀수면 ', () => {
  expect(plusminus([4,7,12],[true,false,true])).toEqual(9);
});

// test('짝수면 "Even"', () => {
//     expect(plusminus(4)).toBe("Even");
// });


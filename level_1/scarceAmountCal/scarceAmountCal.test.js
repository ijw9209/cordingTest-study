const scarceAmountCal = require('./scarceAmountCal');

test('1번 부족한 금액 계산하기 Case ', () => {
  expect(scarceAmountCal(3, 20, 4)).toEqual(10);
});




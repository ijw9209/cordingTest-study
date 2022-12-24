const cokeQuestion = require('./cokeQuestion');

test('콜라문제 1번 Case ', () => {
  expect(cokeQuestion(2,1,20)).toEqual(19);
});


test('콜라문제 2번 Case ', () => {
  expect(cokeQuestion(3,1,20)).toEqual(9);
});


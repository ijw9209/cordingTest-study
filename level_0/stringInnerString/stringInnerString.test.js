const stringInnerString = require('./stringInnerString');

test('문자열안에 문자열 Case 1', () => {
  expect(stringInnerString("ab6CDE443fgh22iJKlmn1o", "6CD")).toBe(1);
});

test('양꼬치 64개 음료 6개 결과 768000', () => {
    expect(stringInnerString("ppprrrogrammers", "pppp")).toBe(2);
});
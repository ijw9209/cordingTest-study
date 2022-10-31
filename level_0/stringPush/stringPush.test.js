const stringPush = require('./stringPush');

test('문자열 밀기 Case 1', () => {
  expect(stringPush("hello"	, "ohell")).toBe(1);
});

test('문자열 밀기 Case 2', () => {
    expect(stringPush("apple", "elppa")).toBe(-1);
});
const trueBracket = require('./trueBracket');

test('올바른 괄호 1번 Case ', () => {
  expect(trueBracket("()()")).toEqual(true);
});


test('올바른 괄호 2번 Case ', () => {
  expect(trueBracket("(())()")).toEqual(true);
});


test('올바른 괄호 3번 Case ', () => {
  expect(trueBracket(")()(")).toEqual(false);
});

test('올바른 괄호 4번 Case ', () => {
  expect(trueBracket("(()(")).toEqual(false);
});


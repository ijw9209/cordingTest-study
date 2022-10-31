const sliceArray = require('./sliceArray');

test('잘라서 배열로 저장하기 Case 1', () => {
  expect(sliceArray("abc1Addfggg4556b", 6)).toBe(["abc1Ad", "dfggg4", "556b"]);
});

test('잘라서 배열로 저장하기 Case 2', () => {
    expect(sliceArray("abcdef123", 3)).toBe(["abc", "def", "123"]);
});
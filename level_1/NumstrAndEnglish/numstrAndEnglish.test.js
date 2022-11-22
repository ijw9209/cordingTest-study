const numstrAndEnglish = require('./numstrAndEnglish');

test('숫자 문자열과 영단어 1번 Case ', () => {
  expect(numstrAndEnglish("one4seveneight")).toBe(1478);
});


test('숫자 문자열과 영단어 2번 Case ', () => {
  expect(numstrAndEnglish("23four5six7")).toBe(234567);
});

test('숫자 문자열과 영단어 3번 Case ', () => {
  expect(numstrAndEnglish("2three45sixseven")).toBe(234567);
});

test('숫자 문자열과 영단어 4번 Case ', () => {
  expect(numstrAndEnglish("123")).toBe(123);
});



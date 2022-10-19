const jadenCase = require('./jadenCase');

test('JadenCase 1번 Case ', () => {
  expect(jadenCase("3people unFollowed me")).toEqual("3people Unfollowed Me");
});


test('JadenCase 2번 Case ', () => {
  expect(jadenCase("for the last week")).toEqual("For The Last Week");
});



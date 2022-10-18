const maxMin = require('./maxMin');

test('1번 Case ', () => {
  expect(maxMin("1 2 3 4")).toEqual("1 4");
});


test('2번 Case ', () => {
  expect(maxMin("-1 -2 -3 -4")).toEqual("-4 -1");
});

test('3번 Case ', () => {
    expect(maxMin("-1 -1")).toEqual("-1 -1");
});
  



